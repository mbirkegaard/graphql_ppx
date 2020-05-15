// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


var Raw = { };

var query = "query   {\nlists  {\nnullableOfNullable  \nnullableOfNonNullable  \nnonNullableOfNullable  \nnonNullableOfNonNullable  \n}\n\n}\n";

function parse(value) {
  var value$1 = value.lists;
  var value$2 = value$1.nonNullableOfNonNullable;
  var nonNullableOfNonNullable = value$2.map((function (value) {
          return value;
        }));
  var value$3 = value$1.nonNullableOfNullable;
  var nonNullableOfNullable = value$3.map((function (value) {
          if (value == null) {
            return ;
          } else {
            return value;
          }
        }));
  var value$4 = value$1.nullableOfNonNullable;
  var nullableOfNonNullable = (value$4 == null) ? undefined : value$4.map((function (value) {
            return value;
          }));
  var value$5 = value$1.nullableOfNullable;
  var nullableOfNullable = (value$5 == null) ? undefined : value$5.map((function (value) {
            if (value == null) {
              return ;
            } else {
              return value;
            }
          }));
  return {
          lists: {
            nullableOfNullable: nullableOfNullable,
            nullableOfNonNullable: nullableOfNonNullable,
            nonNullableOfNullable: nonNullableOfNullable,
            nonNullableOfNonNullable: nonNullableOfNonNullable
          }
        };
}

function serialize(value) {
  var value$1 = value.lists;
  var value$2 = value$1.nonNullableOfNonNullable;
  var nonNullableOfNonNullable = value$2.map((function (value) {
          return value;
        }));
  var value$3 = value$1.nonNullableOfNullable;
  var nonNullableOfNullable = value$3.map((function (value) {
          if (value !== undefined) {
            return value;
          } else {
            return null;
          }
        }));
  var value$4 = value$1.nullableOfNonNullable;
  var nullableOfNonNullable = value$4 !== undefined ? value$4.map((function (value) {
            return value;
          })) : null;
  var value$5 = value$1.nullableOfNullable;
  var nullableOfNullable = value$5 !== undefined ? value$5.map((function (value) {
            if (value !== undefined) {
              return value;
            } else {
              return null;
            }
          })) : null;
  return {
          lists: {
            nullableOfNullable: nullableOfNullable,
            nullableOfNonNullable: nullableOfNonNullable,
            nonNullableOfNullable: nonNullableOfNullable,
            nonNullableOfNonNullable: nonNullableOfNonNullable
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

var MyQuery = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL
};

exports.MyQuery = MyQuery;
/* No side effect */
