[@ocaml.ppx.context
  {
    tool_name: "migrate_driver",
    include_dirs: [],
    load_path: [],
    open_modules: [],
    for_package: None,
    debug: false,
    use_threads: false,
    use_vmthreads: false,
    recursive_types: false,
    principal: false,
    transparent_modules: false,
    unboxed_types: false,
    unsafe_string: false,
    cookies: [],
  }
];
module MyQuery' = {
  module Raw = {
    type t = {recursiveInput: string};
    type t_variables = {arg: t_variables_RecursiveInput}
    and t_variables_RecursiveInput = {
      otherField: Js.Nullable.t(string),
      inner: Js.Nullable.t(t_variables_RecursiveInput),
      enum: Js.Nullable.t(string),
    };
  };
  let query = "query ($arg: RecursiveInput!)  {\nrecursiveInput(arg: $arg)  \n}\n";
  type t = {recursiveInput: string};
  type t_variables = {arg: t_variables_RecursiveInput}
  and t_variables_RecursiveInput = {
    otherField: option(string),
    inner: option(t_variables_RecursiveInput),
    enum: option([ | `FIRST | `SECOND | `THIRD]),
  };
  let parse: Raw.t => t =
    (value) => (
      {
        recursiveInput: {
          let value = (value: Raw.t).recursiveInput;
          value;
        },
      }: t
    );
  let serialize: t => Raw.t =
    (value) => (
      {
        let recursiveInput = {
          let value = (value: t).recursiveInput;
          value;
        };
        {recursiveInput: recursiveInput};
      }: Raw.t
    );
  let rec serializeVariables: t_variables => Raw.t_variables =
    inp => {
      arg:
        (a => serializeInputObjectRecursiveInput(a))((inp: t_variables).arg),
    }
  and serializeInputObjectRecursiveInput:
    t_variables_RecursiveInput => Raw.t_variables_RecursiveInput =
    inp => {
      otherField:
        (
          a =>
            switch (a) {
            | None => Js.Nullable.undefined
            | Some(b) => Js.Nullable.return((a => a)(b))
            }
        )(
          (inp: t_variables_RecursiveInput).otherField,
        ),
      inner:
        (
          a =>
            switch (a) {
            | None => Js.Nullable.undefined
            | Some(b) =>
              Js.Nullable.return(
                (a => serializeInputObjectRecursiveInput(a))(b),
              )
            }
        )(
          (inp: t_variables_RecursiveInput).inner,
        ),
      enum:
        (
          a =>
            switch (a) {
            | None => Js.Nullable.undefined
            | Some(b) =>
              Js.Nullable.return(
                (
                  a =>
                    switch (a) {
                    | `FIRST => "FIRST"
                    | `SECOND => "SECOND"
                    | `THIRD => "THIRD"
                    }
                )(
                  b,
                ),
              )
            }
        )(
          (inp: t_variables_RecursiveInput).enum,
        ),
    };
  let makeVariables = (~arg, ()) =>
    serializeVariables({arg: arg}: t_variables)
  and makeInputObjectRecursiveInput =
      (~otherField=?, ~inner=?, ~enum=?, ()): t_variables_RecursiveInput => {
    otherField,
    inner,
    enum,
  };
  let definition = (parse, query, serialize);
  module Z__INTERNAL = {
    type nonrec _graphql_arg_90;
    /**Variable **$arg** has the following graphql type:

```
RecursiveInput {
  otherField: String
  inner: RecursiveInput
  enum: SampleField
}!
```*/
    let _graphql_arg_90: _graphql_arg_90 = Obj.magic(0);
    type nonrec _graphql_arg_85;
    /**Argument **arg** on field **recursiveInput** has the following graphql type:

```
RecursiveInput {
  otherField: String
  inner: RecursiveInput
  enum: SampleField
}!
```*/
    let _graphql_arg_85: _graphql_arg_85 = Obj.magic(0);
    type root = t;
    type nonrec _graphql_RecursiveInput_47;
    /**```
RecursiveInput {
  otherField: String
  inner: RecursiveInput
  enum: SampleField
}
```*/
    let _graphql_RecursiveInput_47: _graphql_RecursiveInput_47 = Obj.magic(0);
    type nonrec graphql_module;
    /****--- GraphQL PPX Module ---**

The contents of this module are automatically generated by `graphql-ppx`.
The following is simply an overview of the most important variables and types that you can access from this module.

```
module MyQuery {
  // This is the stringified representation of your query, which gets sent to the server.
  let query: string;

  // This is the main type of the result you will get back.
  // You can hover above the identifier key (e.g. query or mutation) to see the fully generated type for your module.
  type t;

  // This function turns your raw result from the server into the reason/ocaml representation of that result.
  // Depending on your graphql client library, this process should happen automatically for you.
  let parse: Raw.t => t;

  // This function will prepare your data for sending it back to the server.
  // Depending on your graphql client library, this process should happen automatically for you.
  let serialize: t => Raw.t;

  // The definition tuple is primarily used to interact with client libraries.
  // The types are equivalent to: (parse, query, serialize).
  // Your client library will use these values to provide the properly parsed / serialized data for you.
  let definition: (
    Raw.t => t,
    string,
    t => Raw.t
  );

  // This is the representation of your raw result coming from the server.
  // It should not be necessary to access the types inside for normal use cases.
  module Raw: { type t; };
}
```*/
    let graphql_module: graphql_module = Obj.magic(0);
  };
};
module MyQuery = {
  include MyQuery';
  module type query_type = (module type of MyQuery');
  let self: module query_type = (module MyQuery');
};
