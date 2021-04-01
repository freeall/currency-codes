var cc = require('./index');
var assert = require('assert');

// test properties of specific currencies

assert.strictEqual(cc.code('EUR').countries.length, 35, 'The Euro is used by 35 countries');
assert.strictEqual(cc.code('IDR').digits, 2, 'The Indonesian Rupiah uses a fraction of 2 digits');
assert.strictEqual(cc.number('967').currency, 'Zambian Kwacha', 'Zambian Kwacha is number 967');
assert.strictEqual(cc.number('036').code, 'AUD', 'Australian Dollar is AUD');
assert.strictEqual(cc.country('Colombia').length, 2, 'Colombia has 2 currencies');
assert.strictEqual(typeof cc.code('JPY').number, 'string', 'Currency numbers are strings');

// test input flexibility

assert.deepStrictEqual(cc.country('colombia'), cc.country('Colombia'), 'Searching by country name is case-insensitive');
assert.strictEqual(cc.number(967).currency, 'Zambian Kwacha', 'Currencies can be found with a number as integer');
assert.deepStrictEqual(cc.number(36), cc.number('036'), 'Currencies can be found with a number < 100 as integer');
assert.deepStrictEqual(cc.number('36'), cc.number('036'), 'Currencies can be found with a number < 100 as string');

// test data across all currencies

cc.numbers().forEach((number) => {
  assert(number.match(/^[0-9]{3}$/), `"${number}" is expected to be exactly 3 digits`);
});

cc.codes().forEach((code) => {
  assert(code.match(/^[A-Z]{3}$/), `"${code}" is expected to be exactly 3 uppercase characters`);
});
  
// test totals

assert.strictEqual(cc.data.length, 179, 'There are a total of 179 currencies');
assert.strictEqual(cc.codes().length, cc.data.length, 'There are as many currency codes as there are currencies');
assert.strictEqual(cc.numbers().length, cc.data.length, 'There are as many currency numbers as there are currencies');
assert.strictEqual(cc.countries().length, 260, 'There are a total of 260 countries');
