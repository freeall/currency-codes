var cc = require("./index");
var assert = require("assert");

assert(cc.code("EUR").countries.length === 23);
assert(cc.number("967").currency === "Zambian kwacha");
assert(cc.number(967).currency === "Zambian kwacha");
assert(cc.country("colombia").length === 2);
assert(cc.codes().length === 179);
assert(cc.countries().length === 246);
assert(cc.numbers().length === 179);
assert(cc.numbers()[0] === "784");
