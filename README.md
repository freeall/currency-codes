# currency-codes

A node.js module to list and work on currency codes based on the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) standard.

	npm install currency-codes

## code('EUR')

``` js
var cc = require('currency-codes');
console.log(cc.code('EUR'));

/*
{
	code: 'EUR',
	number: 978,
	digits: 2,
	currency: 'Euro',
	countries: [
		'andorra', 'austria', 'belgium', 'cyprus', 'estonia', 'finland',
		'france', 'germany', 'greece', 'ireland', 'italy', 'kosovo',
		'luxembourg', 'malta', 'monaco', 'montenegro', 'netherlands',
		'portugal', 'san marino', 'slovakia', 'slovenia', 'spain',
		'vatican city' ]
}
*/
```

## number(967)

``` js
var cc = require('currency-codes');
console.log(cc.number(967));

/*
{
	code: 'ZMW',
	number: 967,
	digits: 2,
	currency: 'Zambian kwacha',
	countries: [ 'zambia' ] }
*/
```

## country('colombia')

``` js
var cc = require('currency-codes');
console.log(cc.country('colombia'));

/*
[
	{
		code: 'COP',
		number: 170,
		digits: 2,
		currency: 'Colombian peso',
		countries: [ 'colombia' ]
	}, {
		code: 'COU',
		number: 970,
		digits: 2,
		currency: 'Unidad de Valor Real',
		countries: [ 'colombia' ]
	}
]
*/
```

## codes()

``` js
var cc = require('currency-codes');
console.log(cc.codes());

/*
[
	'AED',
	'AFN',
	...
	'ZAR',
	'ZMW'
]
*/
```

## numbers()

``` js
var cc = require('currency-codes');
console.log(cc.numbers());

/*
[
	'784',
	'971',
	...
	'710',
	'967'
]
*/
```

## countries()

``` js
var cc = require('currency-codes');
console.log(cc.countries());

/*
[ 
	'united arab emirates',
	'afghanistan',
	...
]
*/
```

## data

``` js
var data = require('currency-codes/data');
console.log(data);

/*
[{
	code: 'AED',
	number: '784',
	digits: 2,
	currency: 'United Arab Emirates dirham',
	countries: ['united arab emirates']
}, {
	code: 'AFN',
	number: '971',
	digits: 2,
	currency: 'Afghan afghani',
	countries: ['afghanistan']
}, {
	...
*/
```


# License

MIT
