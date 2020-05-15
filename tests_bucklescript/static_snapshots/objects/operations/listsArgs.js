// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");

var Raw = { };

var query = "query ($nullableOfNullable: [String], $nullableOfNonNullable: [String!], $nonNullableOfNullable: [String]!, $nonNullableOfNonNullable: [String!]!)  {\nlistsInput(arg: {nullableOfNullable: $nullableOfNullable, nullableOfNonNullable: $nullableOfNonNullable, nonNullableOfNullable: $nonNullableOfNullable, nonNullableOfNonNullable: $nonNullableOfNonNullable})  \n}\n";

function parse(value) {
  return {
          listsInput: value.listsInput
        };
}

function serialize(value) {
  return {
          listsInput: value.listsInput
        };
}

function serializeVariables(inp) {
  var a = inp.nullableOfNullable;
  var tmp;
  if (a !== undefined) {
    var a$1 = a;
    tmp = $$Array.map((function (b) {
            if (b !== undefined) {
              return b;
            }
            
          }), a$1);
  } else {
    tmp = undefined;
  }
  var a$2 = inp.nullableOfNonNullable;
  var tmp$1;
  if (a$2 !== undefined) {
    var a$3 = a$2;
    tmp$1 = $$Array.map((function (b) {
            return b;
          }), a$3);
  } else {
    tmp$1 = undefined;
  }
  var a$4 = inp.nonNullableOfNullable;
  var a$5 = inp.nonNullableOfNonNullable;
  return {
          nullableOfNullable: tmp,
          nullableOfNonNullable: tmp$1,
          nonNullableOfNullable: $$Array.map((function (b) {
                  if (b !== undefined) {
                    return b;
                  }
                  
                }), a$4),
          nonNullableOfNonNullable: $$Array.map((function (b) {
                  return b;
                }), a$5)
        };
}

function makeVariables(nullableOfNullable, nullableOfNonNullable, nonNullableOfNullable, nonNullableOfNonNullable, param) {
  return serializeVariables({
              nullableOfNullable: nullableOfNullable,
              nullableOfNonNullable: nullableOfNonNullable,
              nonNullableOfNullable: nonNullableOfNullable,
              nonNullableOfNonNullable: nonNullableOfNonNullable
            });
}

var definition = /* tuple */[
  parse,
  query,
  serialize
];

var Z__INTERNAL = {
  graphql_module: 0
};

var MyQuery$prime = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL
};

var MyQuery = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL,
  self: MyQuery$prime
};

exports.MyQuery$prime = MyQuery$prime;
exports.MyQuery = MyQuery;
/* No side effect */
