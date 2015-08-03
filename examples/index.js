'use strict';

var capitals = require( './../lib' );

var len = capitals.length,
	N = 10,
	idx,
	i;

// Select random state capitals from the list...
for ( i = 0; i < N; i++ ) {
	idx = Math.ceil( Math.random()*len ) - 1;
	console.log( capitals[ idx ] );
}
