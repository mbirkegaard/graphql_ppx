open Migrate_parsetree;
open Graphql_ppx_base;
open Result_structure;
open Generator_utils;

open Ast_408;
open Asttypes;
open Parsetree;
open Ast_helper;

module StringSet = Set.Make(String);
module VariableFinderImpl = {
  type t = ref(StringSet.t);
  let make_self = _ => ref(StringSet.empty);

  include Traversal_utils.AbstractVisitor;

  let enter_variable_value = (self, _, v) =>
    self := StringSet.add(v.Source_pos.item, self^);

  let from_self = (self: t): StringSet.t => self^;
};

module VariableFinder = Traversal_utils.Visitor(VariableFinderImpl);

let find_variables = (config, document) => {
  let ctx = Traversal_utils.make_context(config, document);
  VariableFinderImpl.from_self(VariableFinder.visit_document(ctx, document));
};

let ret_type_magic = [
  /* Some functor magic to determine the return type of parse */
  [%stri module type mt_ret = {type t;}],
  [%stri type typed_ret('a) = (module mt_ret with type t = 'a)],
  [%stri
    let ret_type = (type a, f: _ => a): typed_ret(a) => {
      module MT_Ret = {
        type t = a;
      };
      (module MT_Ret);
    }
  ],
  [%stri module MT_Ret = (val ret_type(parse))],
  [%stri type t = MT_Ret.t],
];

let emit_printed_query = parts => {
  open Graphql_printer;
  let generate_expr = acc =>
    fun
    | String(s) =>
      Ast_helper.(
        Exp.apply(
          Exp.ident({
            Location.txt: Longident.parse("^"),
            loc: Location.none,
          }),
          [
            (Nolabel, acc),
            (Nolabel, Exp.constant(Pconst_string(s, None))),
          ],
        )
      )
    | FragmentNameRef(f) =>
      Ast_helper.(
        Exp.apply(
          Exp.ident({
            Location.txt: Longident.parse("^"),
            loc: Location.none,
          }),
          [
            (Nolabel, acc),
            (
              Nolabel,
              Exp.ident({
                Location.txt: Longident.parse(f ++ ".name"),
                loc: Location.none,
              }),
            ),
          ],
        )
      )
    | FragmentQueryRef(f) =>
      Ast_helper.(
        Exp.apply(
          Exp.ident({
            Location.txt: Longident.parse("^"),
            loc: Location.none,
          }),
          [
            (Nolabel, acc),
            (
              Nolabel,
              Exp.ident({
                Location.txt: Longident.parse(f ++ ".query"),
                loc: Location.none,
              }),
            ),
          ],
        )
      );

  Array.fold_left(
    generate_expr,
    Ast_helper.Exp.constant(Pconst_string("", None)),
    parts,
  );
};

let rec emit_json =
  Ast_408.(
    fun
    | `Assoc(vs) => {
        let pairs =
          Ast_helper.(
            Exp.array(
              vs
              |> List.map(((key, value)) =>
                   Exp.tuple([
                     Exp.constant(Pconst_string(key, None)),
                     emit_json(value),
                   ])
                 ),
            )
          );
        %expr
        `Assoc([%e pairs] |> Array.to_list);
      }
    | `List(ls) => {
        let values = Ast_helper.Exp.array(List.map(emit_json, ls));
        %expr
        `List([%e values] |> Array.to_list);
      }
    | `Bool(true) => [%expr Js.Json.boolean(true)]
    | `Bool(false) => [%expr Js.Json.boolean(false)]
    | `Null => [%expr Obj.magic(Js.Undefined.empty)]
    | `String(s) => [%expr
        Js.Json.string([%e Ast_helper.Exp.constant(Pconst_string(s, None))])
      ]
    | `Int(i) => [%expr
        Js.Json.number(
          [%e
            Ast_helper.Exp.constant(Pconst_float(string_of_int(i), None))
          ],
        )
      ]
    | `StringExpr(parts) => [%expr
        Js.Json.string([%e emit_printed_query(parts)])
      ]
  );

let make_printed_query = (config, document) => {
  let source = Graphql_printer.print_document(config.schema, document);
  let reprinted =
    switch (Ppx_config.output_mode()) {
    | Ppx_config.Apollo_AST =>
      Ast_serializer_apollo.serialize_document(source, document) |> emit_json
    | Ppx_config.String => emit_printed_query(source)
    };

  [
    [%stri let ppx_printed_query = [%e reprinted]],
    [%stri let query = ppx_printed_query],
  ];
};

let generate_default_operation =
    (config, variable_defs, has_error, operation, res_structure) => {
  let parse_fn =
    Output_native_decoder.generate_decoder(config, res_structure);
  if (has_error) {
    [[%stri let parse = value => [%e parse_fn]]];
  } else {
    let (rec_flag, encoders) =
      Output_native_encoder.generate_encoders(
        config,
        Result_structure.res_loc(res_structure),
        variable_defs,
      );
    let (make_fn, make_with_variables_fn, make_variables_fn, definition_tuple) =
      Output_native_unifier.make_make_fun(config, variable_defs);
    List.concat([
      make_printed_query(config, [Graphql_ast.Operation(operation)]),
      List.concat([
        [[%stri let parse = value => [%e parse_fn]]],
        if (rec_flag == Recursive) {
          [
            {
              pstr_desc: Pstr_value(rec_flag, encoders |> Array.to_list),
              pstr_loc: Location.none,
            },
          ];
        } else {
          encoders
          |> Array.map(encoder =>
               {
                 pstr_desc: Pstr_value(Nonrecursive, [encoder]),
                 pstr_loc: Location.none,
               }
             )
          |> Array.to_list;
        },
        [
          [%stri let make = [%e make_fn]],
          [%stri let makeWithVariables = [%e make_with_variables_fn]],
          [%stri let makeVariables = [%e make_variables_fn]],
          [%stri let definition = [%e definition_tuple]],
        ],
      ]),
      ret_type_magic,
    ]);
  };
};

let generate_fragment_module =
    (config, name, _required_variables, has_error, fragment, res_structure) => {
  let loc = Location.none;
  let parse_fn =
    Output_native_decoder.generate_decoder(config, res_structure);
  let variable_names =
    find_variables(config, [Graphql_ast.Fragment(fragment)])
    |> StringSet.elements;
  let variable_fields =
    variable_names
    |> List.map(name =>
         {
           pof_desc:
             Otag(
               {txt: name, loc},
               Ast_helper.Typ.constr(
                 {txt: Longident.Lident("unit"), loc: Location.none},
                 [],
               ),
             ),
           pof_loc: Location.none,
           pof_attributes: [],
         }
       );
  let variable_obj_type =
    Ast_helper.Typ.constr(
      {txt: Longident.parse("Js.t"), loc: Location.none},
      [Ast_helper.Typ.object_(variable_fields, Open)],
    );
  let contents =
    if (has_error) {
      [
        [%stri
          let make = (_vars: [%t variable_obj_type], value) => [%e parse_fn]
        ],
      ];
    } else {
      List.concat([
        make_printed_query(config, [Graphql_ast.Fragment(fragment)]),
        [
          [%stri let parse = value => [%e parse_fn]],
          [%stri
            let name = [%e
              Ast_helper.Exp.constant(Pconst_string(name, None))
            ]
          ],
        ],
        ret_type_magic,
      ]);
    };

  let m =
    Pstr_module({
      pmb_name: {
        txt: Generator_utils.capitalize_ascii(name),
        loc: Location.none,
      },
      pmb_expr: Mod.structure(contents),
      pmb_attributes: [],
      pmb_loc: Location.none,
    });
  [{pstr_desc: m, pstr_loc: Location.none}];
};

let generate_operation = config =>
  fun
  | Def_operation({
      variable_definitions: vdefs,
      has_error,
      operation,
      inner: structure,
    }) =>
    generate_default_operation(config, vdefs, has_error, operation, structure)
  | Def_fragment({name, req_vars, has_error, fragment, inner: structure}) =>
    generate_fragment_module(
      config,
      name,
      req_vars,
      has_error,
      fragment,
      structure,
    );

let generate_modules = operations => {
  let generated =
    List.map(
      ((definition, config)) => generate_operation(config, definition),
      operations,
    );
  Mod.mk(Pmod_structure(List.concat(generated)));
};
