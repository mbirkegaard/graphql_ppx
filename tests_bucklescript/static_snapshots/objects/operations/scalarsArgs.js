// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


var Raw = { };

var query = "query ($nullableString: String, $string: String!, $nullableInt: Int, $int: Int!, $nullableFloat: Float, $float: Float!, $nullableBoolean: Boolean, $boolean: Boolean!, $nullableID: ID, $id: ID!)  {\nscalarsInput(arg: {nullableString: $nullableString, string: $string, nullableInt: $nullableInt, int: $int, nullableFloat: $nullableFloat, float: $float, nullableBoolean: $nullableBoolean, boolean: $boolean, nullableID: $nullableID, id: $id})  \n}\n";

function parse(value) {
  return {
          scalarsInput: value.scalarsInput
        };
}

function serialize(value) {
  return {
          scalarsInput: value.scalarsInput
        };
}

function serializeVariables(inp) {
  var a = inp.nullableString;
  var a$1 = inp.nullableInt;
  var a$2 = inp.nullableFloat;
  var a$3 = inp.nullableBoolean;
  var a$4 = inp.nullableID;
  return {
          nullableString: a !== undefined ? a : undefined,
          string: inp.string,
          nullableInt: a$1 !== undefined ? a$1 : undefined,
          int: inp.int,
          nullableFloat: a$2 !== undefined ? a$2 : undefined,
          float: inp.float,
          nullableBoolean: a$3 !== undefined ? a$3 : undefined,
          boolean: inp.boolean,
          nullableID: a$4 !== undefined ? a$4 : undefined,
          id: inp.id
        };
}

function makeVariables(nullableString, string, nullableInt, $$int, nullableFloat, $$float, nullableBoolean, $$boolean, nullableID, id, param) {
  return serializeVariables({
              nullableString: nullableString,
              string: string,
              nullableInt: nullableInt,
              int: $$int,
              nullableFloat: nullableFloat,
              float: $$float,
              nullableBoolean: nullableBoolean,
              boolean: $$boolean,
              nullableID: nullableID,
              id: id
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
