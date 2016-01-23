"use strict";

var summationOfPrimes = function summationOfPrimes(limit) {

	var composites = {},
	    primes = [];

	for (var i = 2; i < limit; i++) {
		if (!composites[i]) {
			primes.push(i);
			for (var j = i; j * i < limit; j++) {
				composites[i * j] = true;
			}
		}
	}

	return primes.reduce(function (sum, val) {
		return sum + val;
	});
};

console.log(summationOfPrimes(2000000));