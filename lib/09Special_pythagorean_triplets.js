"use strict";

var triplets = function triplets(x) {

	var m = 1,
	    n = undefined;

	for (; m < x / 2; m++) {
		n = x / 2 / m - m;
		if (m > n && n % 1 === 0) {
			var a = undefined,
			    b = undefined,
			    c = undefined;
			a = 2 * m * n;
			b = Math.pow(m, 2) - Math.pow(n, 2);
			c = Math.pow(m, 2) + Math.pow(n, 2);
			return a * b * c;
		}
	}
	return -1;
};

console.log(triplets(1000));