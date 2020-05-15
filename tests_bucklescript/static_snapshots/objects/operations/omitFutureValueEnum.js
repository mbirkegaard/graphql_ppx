// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var Raw = { };

var query = "mutation   {\nmutationWithError  {\nerrors  {\nmessage  \nfield  \n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = value.mutationWithError;
  var value$2 = value$1.errors;
  var errors = (value$2 == null) ? undefined : value$2.map((function (value) {
            var value$1 = value.field;
            var field;
            switch (value$1) {
              case "FIRST" :
                  field = /* FIRST */-24399856;
                  break;
              case "SECOND" :
                  field = /* SECOND */382368628;
                  break;
              case "THIRD" :
                  field = /* THIRD */225952583;
                  break;
              default:
                field = /* `FutureAddedValue */[
                  -31101740,
                  value$1
                ];
            }
            var value$2 = value.message;
            return {
                    message: value$2,
                    field: field
                  };
          }));
  return {
          mutationWithError: {
            errors: errors
          }
        };
}

function serialize(value) {
  var value$1 = value.mutationWithError;
  var value$2 = value$1.errors;
  var errors = value$2 !== undefined ? value$2.map((function (value) {
            var value$1 = value.field;
            var field = typeof value$1 === "number" ? (
                value$1 !== 225952583 ? (
                    value$1 >= 382368628 ? "SECOND" : "FIRST"
                  ) : "THIRD"
              ) : value$1[1];
            var value$2 = value.message;
            return {
                    message: value$2,
                    field: field
                  };
          })) : null;
  return {
          mutationWithError: {
            errors: errors
          }
        };
}

var definition = /* tuple */[
  parse,
  query,
  serialize
];

var Z__INTERNAL = {
  graphql_module: 0
};

var Normal = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL
};

var Raw$1 = { };

var query$1 = "mutation   {\nmutationWithError  {\nerrors  {\nmessage  \nfield  \n}\n\n}\n\n}\n";

function parse$1(value) {
  var value$1 = value.mutationWithError;
  var value$2 = value$1.errors;
  var errors = (value$2 == null) ? undefined : value$2.map((function (value) {
            var value$1 = value.field;
            var field;
            switch (value$1) {
              case "FIRST" :
                  field = /* FIRST */-24399856;
                  break;
              case "SECOND" :
                  field = /* SECOND */382368628;
                  break;
              case "THIRD" :
                  field = /* THIRD */225952583;
                  break;
              default:
                throw Caml_builtin_exceptions.not_found;
            }
            var value$2 = value.message;
            return {
                    message: value$2,
                    field: field
                  };
          }));
  return {
          mutationWithError: {
            errors: errors
          }
        };
}

function serialize$1(value) {
  var value$1 = value.mutationWithError;
  var value$2 = value$1.errors;
  var errors = value$2 !== undefined ? value$2.map((function (value) {
            var value$1 = value.field;
            var field = value$1 !== 225952583 ? (
                value$1 >= 382368628 ? "SECOND" : "FIRST"
              ) : "THIRD";
            var value$2 = value.message;
            return {
                    message: value$2,
                    field: field
                  };
          })) : null;
  return {
          mutationWithError: {
            errors: errors
          }
        };
}

var definition$1 = /* tuple */[
  parse$1,
  query$1,
  serialize$1
];

var Z__INTERNAL$1 = {
  graphql_module: 0
};

var ByConfig = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  definition: definition$1,
  Z__INTERNAL: Z__INTERNAL$1
};

var Raw$2 = { };

var query$2 = "mutation   {\nmutationWithError  {\nerrors  {\nmessage  \nfield @ppxOmitFutureValue \n}\n\n}\n\n}\n";

function parse$2(value) {
  var value$1 = value.mutationWithError;
  var value$2 = value$1.errors;
  var errors = (value$2 == null) ? undefined : value$2.map((function (value) {
            var value$1 = value.field;
            var field;
            switch (value$1) {
              case "FIRST" :
                  field = /* FIRST */-24399856;
                  break;
              case "SECOND" :
                  field = /* SECOND */382368628;
                  break;
              case "THIRD" :
                  field = /* THIRD */225952583;
                  break;
              default:
                throw Caml_builtin_exceptions.not_found;
            }
            var value$2 = value.message;
            return {
                    message: value$2,
                    field: field
                  };
          }));
  return {
          mutationWithError: {
            errors: errors
          }
        };
}

function serialize$2(value) {
  var value$1 = value.mutationWithError;
  var value$2 = value$1.errors;
  var errors = value$2 !== undefined ? value$2.map((function (value) {
            var value$1 = value.field;
            var field = value$1 !== 225952583 ? (
                value$1 >= 382368628 ? "SECOND" : "FIRST"
              ) : "THIRD";
            var value$2 = value.message;
            return {
                    message: value$2,
                    field: field
                  };
          })) : null;
  return {
          mutationWithError: {
            errors: errors
          }
        };
}

var definition$2 = /* tuple */[
  parse$2,
  query$2,
  serialize$2
];

var Z__INTERNAL$2 = {
  graphql_module: 0
};

var ByDirective = {
  Raw: Raw$2,
  query: query$2,
  parse: parse$2,
  serialize: serialize$2,
  definition: definition$2,
  Z__INTERNAL: Z__INTERNAL$2
};

exports.Normal = Normal;
exports.ByConfig = ByConfig;
exports.ByDirective = ByDirective;
/* No side effect */
