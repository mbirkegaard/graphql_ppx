// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


var Raw = { };

var query = "query   {\nlists  {\nnullableOfNullable  \nnullableOfNonNullable  \nnonNullableOfNullable  \nnonNullableOfNonNullable  \n}\n\n}\n";

function parse(value) {
  var value$1 = value.lists;
  var value$2 = value$1.nullableOfNullable;
  var value$3 = value$1.nullableOfNonNullable;
  var value$4 = value$1.nonNullableOfNullable;
  var value$5 = value$1.nonNullableOfNonNullable;
  return {
          lists: {
            nullableOfNullable: (value$2 == null) ? undefined : value$2.map((function (value) {
                      if (value == null) {
                        return ;
                      } else {
                        return value;
                      }
                    })),
            nullableOfNonNullable: (value$3 == null) ? undefined : value$3.map((function (value) {
                      return value;
                    })),
            nonNullableOfNullable: value$4.map((function (value) {
                    if (value == null) {
                      return ;
                    } else {
                      return value;
                    }
                  })),
            nonNullableOfNonNullable: value$5.map((function (value) {
                    return value;
                  }))
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
  var lists = {
    nullableOfNullable: nullableOfNullable,
    nullableOfNonNullable: nullableOfNonNullable,
    nonNullableOfNullable: nonNullableOfNullable,
    nonNullableOfNonNullable: nonNullableOfNonNullable
  };
  return {
          lists: lists
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

var RecordsQuery$prime = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL
};

var RecordsQuery = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL,
  self: RecordsQuery$prime
};

var Raw$1 = { };

var query$1 = "query   {\nlists  {\nnullableOfNullable  \nnullableOfNonNullable  \nnonNullableOfNullable  \nnonNullableOfNonNullable  \n}\n\n}\n";

function parse$1(value) {
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

function serialize$1(value) {
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

var definition$1 = /* tuple */[
  parse$1,
  query$1,
  serialize$1
];

var Z__INTERNAL$1 = {
  graphql_module: 0
};

var ObjectsQuery$prime = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  definition: definition$1,
  Z__INTERNAL: Z__INTERNAL$1
};

var ObjectsQuery = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  definition: definition$1,
  Z__INTERNAL: Z__INTERNAL$1,
  self: ObjectsQuery$prime
};

exports.RecordsQuery$prime = RecordsQuery$prime;
exports.RecordsQuery = RecordsQuery;
exports.ObjectsQuery$prime = ObjectsQuery$prime;
exports.ObjectsQuery = ObjectsQuery;
/* No side effect */
