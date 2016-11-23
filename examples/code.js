'use strict'

var cc = require('../index');

console.log('The following countries have the Country Code (ANG):\n');

cc.code('ANG').countries.forEach(function(country){
    console.log(country);
});