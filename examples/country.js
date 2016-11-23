'use strict'

var cc = require('./index');

console.log('Currency codes within colombia:\n');

cc.country('colombia').forEach(function(code){
    console.log(code['code']);
});

