var first = require("first-match");
var nub = require("nub");
var data = require("./data");

var code = function(code) {
  code = code.toUpperCase();

  return first(data, function(c) {
    return c.code === code;
  });
};
var country = function(country) {
  country = country.toLowerCase();

  return data.filter(function(c) {
    return (c.countries || []).indexOf(country) > -1;
  });
};
var number = function(number) {
  return first(data, function(c) {
    return c.number === String(number);
  });
};
var codes = function() {
  return data.map(function(c) {
    return c.code;
  });
};
var numbers = function() {
  return data.map(function(c) {
    return c.number;
  });
};
var countries = function() {
  var m = data
    .filter(function(c) {
      return c.countries;
    })
    .map(function(c) {
      return c.countries;
    });
  return nub(Array.prototype.concat.apply([], m));
};

exports.code = code;
exports.country = country;
exports.number = number;
exports.codes = codes;
exports.numbers = numbers;
exports.countries = countries;
