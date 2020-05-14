// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function deepMerge(json1, json2) {
  var match_000 = json1 === null;
  var match_001 = Array.isArray(json1);
  var match_002 = typeof json1 === "object";
  var match_000$1 = json2 === null;
  var match_001$1 = Array.isArray(json2);
  var match_002$1 = typeof json2 === "object";
  if (match_001) {
    if (match_001$1) {
      return json1.map((function (el1, idx) {
                    var el2 = json2[idx];
                    if (typeof el2 === "object") {
                      return deepMerge(el1, el2);
                    } else {
                      return el2;
                    }
                  }));
    } else {
      return json2;
    }
  } else if (match_000 || !(match_002 && !(match_000$1 || match_001$1 || !match_002$1))) {
    return json2;
  } else {
    var obj1 = Object.assign({ }, json1);
    Object.keys(json2).forEach((function (key) {
            var existingVal = obj1[key];
            var newVal = json2[key];
            obj1[key] = typeof existingVal !== "object" ? newVal : deepMerge(existingVal, newVal);
            return /* () */0;
          }));
    return obj1;
  }
}

var GraphQL_PPX = {
  deepMerge: deepMerge
};

var query = "fragment ListFragment on Lists   {\nnullableOfNullable  \nnullableOfNonNullable  \n}\n";

var Raw = { };

function parse(value) {
  var value$1 = value.nullableOfNonNullable;
  var nullableOfNonNullable = (value$1 == null) ? undefined : value$1.map((function (value) {
            return value;
          }));
  var value$2 = value.nullableOfNullable;
  var nullableOfNullable = (value$2 == null) ? undefined : value$2.map((function (value) {
            if (value == null) {
              return ;
            } else {
              return value;
            }
          }));
  return {
          nullableOfNullable: nullableOfNullable,
          nullableOfNonNullable: nullableOfNonNullable
        };
}

function serialize(value) {
  var value$1 = value.nullableOfNonNullable;
  var nullableOfNonNullable = value$1 !== undefined ? value$1.map((function (value) {
            return value;
          })) : null;
  var value$2 = value.nullableOfNullable;
  var nullableOfNullable = value$2 !== undefined ? value$2.map((function (value) {
            if (value !== undefined) {
              return value;
            } else {
              return null;
            }
          })) : null;
  return {
          nullableOfNullable: nullableOfNullable,
          nullableOfNonNullable: nullableOfNonNullable
        };
}

var name = "ListFragment";

var Z__INTERNAL = {
  graphql: 0,
  graphql_module: 0
};

var ListFragment = {
  query: query,
  Raw: Raw,
  parse: parse,
  serialize: serialize,
  name: name,
  Z__INTERNAL: Z__INTERNAL
};

var Raw$1 = { };

function parse$1(value) {
  var value$1 = value.nullableOfNonNullable;
  return {
          nullableOfNonNullable: (value$1 == null) ? undefined : value$1.map((function (value) {
                    return value;
                  }))
        };
}

function serialize$1(value) {
  var value$1 = value.nullableOfNonNullable;
  return {
          nullableOfNonNullable: value$1 !== undefined ? value$1.map((function (value) {
                    return value;
                  })) : null
        };
}

var Z__INTERNAL$1 = {
  graphql: 0,
  graphql_module: 0
};

var Another = {
  query: "fragment Another on Lists   {\nnullableOfNonNullable  \n}\n",
  Raw: Raw$1,
  parse: parse$1,
  serialize: serialize$1,
  name: "Another",
  Z__INTERNAL: Z__INTERNAL$1
};

var Fragments = {
  ListFragment: ListFragment,
  Another: Another
};

var Raw$2 = { };

var query$1 = "query   {\nl1: lists  {\n...ListFragment   \n}\n\nl2: lists  {\n...ListFragment   \n...ListFragment   \n}\n\nl3: lists  {\nnullableOfNullable  \n...ListFragment   \n...ListFragment   \n}\n\nl4: lists  {\nnullableOfNullable  \n...ListFragment   \n}\n\n}\nfragment ListFragment on Lists   {\nnullableOfNullable  \nnullableOfNonNullable  \n}\n";

function parse$2(value) {
  var value$1 = value.l4;
  var listFragment = parse(value$1);
  var value$2 = value$1["nullableOfNullable"];
  var nullableOfNullable = (value$2 == null) ? undefined : value$2.map((function (value) {
            if (value == null) {
              return ;
            } else {
              return value;
            }
          }));
  var l4 = {
    nullableOfNullable: nullableOfNullable,
    listFragment: listFragment
  };
  var value$3 = value.l3;
  var frag2 = parse(value$3);
  var frag1 = parse(value$3);
  var value$4 = value$3["nullableOfNullable"];
  var nullableOfNullable$1 = (value$4 == null) ? undefined : value$4.map((function (value) {
            if (value == null) {
              return ;
            } else {
              return value;
            }
          }));
  var l3 = {
    nullableOfNullable: nullableOfNullable$1,
    frag1: frag1,
    frag2: frag2
  };
  var value$5 = value.l2;
  var frag2$1 = parse(value$5);
  var frag1$1 = parse(value$5);
  var l2 = {
    frag1: frag1$1,
    frag2: frag2$1
  };
  var value$6 = value.l1;
  var l1 = parse(value$6);
  return {
          l1: l1,
          l2: l2,
          l3: l3,
          l4: l4
        };
}

function serialize$2(value) {
  var value$1 = value.l4;
  var value$2 = value$1.nullableOfNullable;
  var l4 = [serialize(value$1.listFragment)].reduce(deepMerge, {
        nullableOfNullable: value$2 !== undefined ? value$2.map((function (value) {
                  if (value !== undefined) {
                    return value;
                  } else {
                    return null;
                  }
                })) : null
      });
  var value$3 = value.l3;
  var value$4 = value$3.nullableOfNullable;
  var l3 = [
      serialize(value$3.frag1),
      serialize(value$3.frag2)
    ].reduce(deepMerge, {
        nullableOfNullable: value$4 !== undefined ? value$4.map((function (value) {
                  if (value !== undefined) {
                    return value;
                  } else {
                    return null;
                  }
                })) : null
      });
  var value$5 = value.l2;
  var l2 = [
      serialize(value$5.frag1),
      serialize(value$5.frag2)
    ].reduce(deepMerge, (function (prim) {
          return { };
        }));
  var value$6 = value.l1;
  var l1 = serialize(value$6);
  return {
          l1: l1,
          l2: l2,
          l3: l3,
          l4: l4
        };
}

var definition = /* tuple */[
  parse$2,
  query$1,
  serialize$2
];

var Z__INTERNAL$2 = {
  graphql_module: 0
};

var MyQuery = {
  Raw: Raw$2,
  query: query$1,
  parse: parse$2,
  serialize: serialize$2,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL$2
};

var Raw$3 = { };

var query$2 = "query   {\nlists  {\n...ListFragment   \n}\n\n}\nfragment ListFragment on Lists   {\nnullableOfNullable  \nnullableOfNonNullable  \n}\n";

function parse$3(value) {
  var value$1 = value.lists;
  return {
          lists: parse(value$1)
        };
}

function serialize$3(value) {
  var value$1 = value.lists;
  return {
          lists: serialize(value$1)
        };
}

var definition$1 = /* tuple */[
  parse$3,
  query$2,
  serialize$3
];

var Z__INTERNAL$3 = {
  graphql_module: 0
};

var MyQuery2 = {
  Raw: Raw$3,
  query: query$2,
  parse: parse$3,
  serialize: serialize$3,
  definition: definition$1,
  Z__INTERNAL: Z__INTERNAL$3
};

exports.GraphQL_PPX = GraphQL_PPX;
exports.Fragments = Fragments;
exports.MyQuery = MyQuery;
exports.MyQuery2 = MyQuery2;
/* No side effect */
