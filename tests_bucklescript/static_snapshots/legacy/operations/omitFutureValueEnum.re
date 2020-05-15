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
module Normal' = {
  module Raw = {
    type t_mutationWithError_errors_field = string;
    type t_mutationWithError_errors = {
      .
      "message": string,
      "field": t_mutationWithError_errors_field,
    };
    type t_mutationWithError = {
      .
      "errors": Js.Nullable.t(array(t_mutationWithError_errors)),
    };
    type t = {. "mutationWithError": t_mutationWithError};
  };
  let query = "mutation   {\nmutationWithError  {\nerrors  {\nmessage  \nfield  \n}\n\n}\n\n}\n";
  type t_mutationWithError_errors_field = [
    | `FutureAddedValue(string)
    | `FIRST
    | `SECOND
    | `THIRD
  ];
  type t_mutationWithError_errors = {
    .
    "message": string,
    "field": t_mutationWithError_errors_field,
  };
  type t_mutationWithError = {
    .
    "errors": option(array(t_mutationWithError_errors)),
  };
  type t = {. "mutationWithError": t_mutationWithError};
  let parse: Raw.t => t =
    value => {
      let mutationWithError = {
        let value = value##mutationWithError;
        let errors = {
          let value = value##errors;
          switch (Js.toOption(value)) {
          | Some(value) =>
            Some(
              value
              |> Js.Array.map(value =>
                   let field = {
                     let value = value##field;
                     switch (Obj.magic(value: string)) {
                     | "FIRST" => `FIRST
                     | "SECOND" => `SECOND
                     | "THIRD" => `THIRD
                     | other => `FutureAddedValue(other)
                     };
                   }
                   and message = {
                     let value = value##message;
                     value;
                   };
                   {"message": message, "field": field};
                 ),
            )
          | None => None
          };
        };
        {"errors": errors};
      };
      {"mutationWithError": mutationWithError};
    };
  let serialize: t => Raw.t =
    value => {
      let mutationWithError = {
        let value = value##mutationWithError;
        let errors = {
          let value = value##errors;
          switch (value) {
          | Some(value) =>
            Js.Nullable.return(
              value
              |> Js.Array.map(value =>
                   let field = {
                     let value = value##field;
                     switch (value) {
                     | `FIRST => "FIRST"
                     | `SECOND => "SECOND"
                     | `THIRD => "THIRD"
                     | `FutureAddedValue(other) => other
                     };
                   }
                   and message = {
                     let value = value##message;
                     value;
                   };
                   {"message": message, "field": field};
                 ),
            )
          | None => Js.Nullable.null
          };
        };
        {"errors": errors};
      };
      {"mutationWithError": mutationWithError};
    };
  let make = () => {
    "query": query,
    "variables": Js.Json.null,
    "parse": parse,
  };
  let definition = (parse, query, serialize);
  module Z__INTERNAL = {
    type root = t;
    type nonrec graphql_module;
    /****--- GraphQL PPX Module ---**

The contents of this module are automatically generated by `graphql-ppx`.
The following is simply an overview of the most important variables and types that you can access from this module.

```
module Normal {
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
module Normal = {
  include Normal';
  module type query_type = (module type of Normal');
  let self: module query_type = (module Normal');
};
module ByConfig' = {
  module Raw = {
    type t_mutationWithError_errors_field = string;
    type t_mutationWithError_errors = {
      .
      "message": string,
      "field": t_mutationWithError_errors_field,
    };
    type t_mutationWithError = {
      .
      "errors": Js.Nullable.t(array(t_mutationWithError_errors)),
    };
    type t = {. "mutationWithError": t_mutationWithError};
  };
  let query = "mutation   {\nmutationWithError  {\nerrors  {\nmessage  \nfield  \n}\n\n}\n\n}\n";
  type t_mutationWithError_errors_field = [ | `FIRST | `SECOND | `THIRD];
  type t_mutationWithError_errors = {
    .
    "message": string,
    "field": t_mutationWithError_errors_field,
  };
  type t_mutationWithError = {
    .
    "errors": option(array(t_mutationWithError_errors)),
  };
  type t = {. "mutationWithError": t_mutationWithError};
  let parse: Raw.t => t =
    value => {
      let mutationWithError = {
        let value = value##mutationWithError;
        let errors = {
          let value = value##errors;
          switch (Js.toOption(value)) {
          | Some(value) =>
            Some(
              value
              |> Js.Array.map(value =>
                   let field = {
                     let value = value##field;
                     switch (Obj.magic(value: string)) {
                     | "FIRST" => `FIRST
                     | "SECOND" => `SECOND
                     | "THIRD" => `THIRD
                     | _ => raise(Not_found)
                     };
                   }
                   and message = {
                     let value = value##message;
                     value;
                   };
                   {"message": message, "field": field};
                 ),
            )
          | None => None
          };
        };
        {"errors": errors};
      };
      {"mutationWithError": mutationWithError};
    };
  let serialize: t => Raw.t =
    value => {
      let mutationWithError = {
        let value = value##mutationWithError;
        let errors = {
          let value = value##errors;
          switch (value) {
          | Some(value) =>
            Js.Nullable.return(
              value
              |> Js.Array.map(value =>
                   let field = {
                     let value = value##field;
                     switch (value) {
                     | `FIRST => "FIRST"
                     | `SECOND => "SECOND"
                     | `THIRD => "THIRD"
                     };
                   }
                   and message = {
                     let value = value##message;
                     value;
                   };
                   {"message": message, "field": field};
                 ),
            )
          | None => Js.Nullable.null
          };
        };
        {"errors": errors};
      };
      {"mutationWithError": mutationWithError};
    };
  let make = () => {
    "query": query,
    "variables": Js.Json.null,
    "parse": parse,
  };
  let definition = (parse, query, serialize);
  module Z__INTERNAL = {
    type root = t;
    type nonrec graphql_module;
    /****--- GraphQL PPX Module ---**

The contents of this module are automatically generated by `graphql-ppx`.
The following is simply an overview of the most important variables and types that you can access from this module.

```
module ByConfig {
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
module ByConfig = {
  include ByConfig';
  module type query_type = (module type of ByConfig');
  let self: module query_type = (module ByConfig');
};
module ByDirective' = {
  module Raw = {
    type t_mutationWithError_errors_field = string;
    type t_mutationWithError_errors = {
      .
      "message": string,
      "field": t_mutationWithError_errors_field,
    };
    type t_mutationWithError = {
      .
      "errors": Js.Nullable.t(array(t_mutationWithError_errors)),
    };
    type t = {. "mutationWithError": t_mutationWithError};
  };
  let query = "mutation   {\nmutationWithError  {\nerrors  {\nmessage  \nfield @ppxOmitFutureValue \n}\n\n}\n\n}\n";
  type t_mutationWithError_errors_field = [ | `FIRST | `SECOND | `THIRD];
  type t_mutationWithError_errors = {
    .
    "message": string,
    "field": t_mutationWithError_errors_field,
  };
  type t_mutationWithError = {
    .
    "errors": option(array(t_mutationWithError_errors)),
  };
  type t = {. "mutationWithError": t_mutationWithError};
  let parse: Raw.t => t =
    value => {
      let mutationWithError = {
        let value = value##mutationWithError;
        let errors = {
          let value = value##errors;
          switch (Js.toOption(value)) {
          | Some(value) =>
            Some(
              value
              |> Js.Array.map(value =>
                   let field = {
                     let value = value##field;
                     switch (Obj.magic(value: string)) {
                     | "FIRST" => `FIRST
                     | "SECOND" => `SECOND
                     | "THIRD" => `THIRD
                     | _ => raise(Not_found)
                     };
                   }
                   and message = {
                     let value = value##message;
                     value;
                   };
                   {"message": message, "field": field};
                 ),
            )
          | None => None
          };
        };
        {"errors": errors};
      };
      {"mutationWithError": mutationWithError};
    };
  let serialize: t => Raw.t =
    value => {
      let mutationWithError = {
        let value = value##mutationWithError;
        let errors = {
          let value = value##errors;
          switch (value) {
          | Some(value) =>
            Js.Nullable.return(
              value
              |> Js.Array.map(value =>
                   let field = {
                     let value = value##field;
                     switch (value) {
                     | `FIRST => "FIRST"
                     | `SECOND => "SECOND"
                     | `THIRD => "THIRD"
                     };
                   }
                   and message = {
                     let value = value##message;
                     value;
                   };
                   {"message": message, "field": field};
                 ),
            )
          | None => Js.Nullable.null
          };
        };
        {"errors": errors};
      };
      {"mutationWithError": mutationWithError};
    };
  let make = () => {
    "query": query,
    "variables": Js.Json.null,
    "parse": parse,
  };
  let definition = (parse, query, serialize);
  module Z__INTERNAL = {
    type root = t;
    type nonrec graphql_module;
    /****--- GraphQL PPX Module ---**

The contents of this module are automatically generated by `graphql-ppx`.
The following is simply an overview of the most important variables and types that you can access from this module.

```
module ByDirective {
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
module ByDirective = {
  include ByDirective';
  module type query_type = (module type of ByDirective');
  let self: module query_type = (module ByDirective');
};
