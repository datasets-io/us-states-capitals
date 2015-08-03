US State Capitals
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> US state capitals.


## Installation

``` bash
$ npm install datasets-us-states-capitals
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var capitals = require( 'datasets-us-states-capitals' );
```

#### capitals

US state capitals listed in alphabetical order according to state name.

``` javascript
console.log( capitals );
/*
	[
		"Montgomery",
		"Juneau",
		"Phoenix",
		"Little Rock",
		"Sacramento",
		"Denver",
		"Hartford",
		"Dover",
		"Tallahassee",
		"Atlanta",
		"Honolulu",
		...
	]
*/
```


## Examples

``` javascript
var capitals = require( 'datasets-us-states-capitals' );

var len = capitals.length,
	N = 10,
	idx,
	i;

// Select random state capitals from the list...
for ( i = 0; i < N; i++ ) {
	idx = Math.ceil( Math.random()*len ) - 1;
	console.log( capitals[ idx ] );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-us-states-capitals.svg
[npm-url]: https://npmjs.org/package/datasets-us-states-capitals

[travis-image]: http://img.shields.io/travis/datasets-io/us-states-capitals/master.svg
[travis-url]: https://travis-ci.org/datasets-io/us-states-capitals

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/us-states-capitals/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/us-states-capitals?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/us-states-capitals.svg
[dependencies-url]: https://david-dm.org/datasets-io/us-states-capitals

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/us-states-capitals.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/us-states-capitals

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/us-states-capitals.svg
[github-issues-url]: https://github.com/datasets-io/us-states-capitals/issues
