var first = require('first-match'); //to allow easily finding first elements of arrays 
var nub = require('nub'); //to find all the unique elements of arrays
var data = require('./data'); //lists all the detail currency code information



/** 
 * Returns the first array with the country codes that matches the given code
 * @param {number} code - a three letter country code, must be valid
 * @return {array} code  - an array containing all the currency code 
 * information that matches the country code.
 */
var code = function(code) {
	code = code.toUpperCase();

	return first(data, function(c) {
		return c.code === code;
	});
};

/** 
 * Returns an array of arrays with the country code information of that country
 * @param {string} country - a full name of a country 
 * @return {array} - array containing country code information for all codes within the given country
 */
var country = function(country) {
	country = country.toLowerCase();

	return data.filter(function(c) {
		return (c.countries || []).indexOf(country) > -1; //returns the currency information if it is valid, else return empty array.
	});
};

/**
 * Returns the Currency Code information of the currency with the given code
 * @param {number} number - a number that represents a currency code, must be valid code
 * @return {array} - an array containing all the currency code 
 * information that matches the currency number.
 */
var number = function(number) {
	return first(data, function(c) {
		return c.number === String(number); //Return the first instance of a matching number in the data file
	});
};

/**
 * Returns a list of all the 3 letter currency codes of the countries in the index.
 * @return {array} - An array of strings containing 3 letter currency codes.
 */
var codes = function() {
	return data.map(function(c) {
		return c.code;
	});
};

/**
 * Returns an array of all the countries in the index.
 * @return {array} - Array of strings with all the countries in the data file.
 */
var countries = function() {
	var m = data.filter(function(c) {
		return c.countries; //filter out all the countries
	}).map(function(c) {
		return c.countries;
	});
	return nub(Array.prototype.concat.apply([], m)); //concatonate the unique elements of map (countries) into the array
};

exports.code = code;
exports.country = country;
exports.number = number;
exports.codes = codes;
exports.countries = countries;
