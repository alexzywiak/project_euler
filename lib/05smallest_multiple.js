"use strict";

// Gets all prime factors
// Returns an object where key = factor, and value is equal to number occurences
// ie 8 = {2: 3} --> 8 = 2^3
var getPrimeFactors = function getPrimeFactors(n) {

	var factors = {};

	// Manages adding to output object
	var addFactor = function addFactor(n) {
		if (factors[n] === undefined) {
			factors[n] = 0;
		}
		factors[n]++;
	};

	// Even Numbers
	while (n % 2 === 0) {
		n = n / 2;
		addFactor(2);
	}

	// all other primes
	for (var i = 3; i <= Math.sqrt(n); i += 2) {
		while (n % i === 0) {
			n = n / i;
			addFactor(i);
		}
	}

	// In case n is itself a prime
	if (n > 1) {
		addFactor(n);
	}

	return factors;
};

// Gets Prime Factors of all numbers 1 --> limit
// Compiles all non-repeated factors and multiplies out
var smallestMultiple = function smallestMultiple(limit) {

	var factors = {};

	// Get factors for the range
	for (var i = 2; i <= limit; i++) {
		var newFactors = getPrimeFactors(i);

		// Add in new factors and update max number of occurences
		for (var factor in newFactors) {
			if (!factors[factor] || factors[factor] < newFactors[factor]) {
				factors[factor] = newFactors[factor];
			}
		}
	}

	// Multiply out factors to get multiple
	return Object.keys(factors).reduce(function (product, key) {
		return product * Math.pow(key, factors[key]);
	}, 1);
};