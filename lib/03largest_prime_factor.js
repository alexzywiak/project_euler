"use strict";

var isPrime = function isPrime(n) {

	if (n === 2) return true;

	for (var i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return true;
};

var largestPrime = function largestPrime(n) {
	for (var i = Math.ceil(Math.sqrt(n)); i >= 2; i--) {
		if (n % i === 0) {
			if (isPrime(i)) {
				return i;
			}
		}
	}
};