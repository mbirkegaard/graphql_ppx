// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Caml_format = require("bs-platform/lib/js/caml_format.js");

function parse(prim) {
  return String(prim);
}

var serialize = Caml_format.caml_int_of_string;

var StringOfInt = {
  parse: parse,
  serialize: serialize
};

var parse$1 = Caml_format.caml_int_of_string;

function serialize$1(prim) {
  return String(prim);
}

var IntOfString = {
  parse: parse$1,
  serialize: serialize$1
};

var Raw = { };

var query = "query   {\nvariousScalars  {\nstring  \nint  \n}\n\n}\n";

function parse$2(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.int;
  var $$int = String(value$2);
  var value$3 = value$1.string;
  var string = Caml_format.caml_int_of_string(value$3);
  return {
          variousScalars: {
            string: string,
            int: $$int
          }
        };
}

function serialize$2(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.int;
  var $$int = Caml_format.caml_int_of_string(value$2);
  var value$3 = value$1.string;
  var string = String(value$3);
  return {
          variousScalars: {
            string: string,
            int: $$int
          }
        };
}

var definition = /* tuple */[
  parse$2,
  query,
  serialize$2
];

var Z__INTERNAL = {
  graphql_module: 0
};

var MyQuery$prime = {
  Raw: Raw,
  query: query,
  parse: parse$2,
  serialize: serialize$2,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL
};

var MyQuery = {
  Raw: Raw,
  query: query,
  parse: parse$2,
  serialize: serialize$2,
  definition: definition,
  Z__INTERNAL: Z__INTERNAL,
  self: MyQuery$prime
};

exports.StringOfInt = StringOfInt;
exports.IntOfString = IntOfString;
exports.MyQuery$prime = MyQuery$prime;
exports.MyQuery = MyQuery;
/* No side effect */
