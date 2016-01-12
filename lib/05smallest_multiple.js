"use strict";

var getPrimeFactors = function getPrimeFactors(n) {

	var factors = {};

	var addFactor = function addFactor(n) {
		if (factors[n] === undefined) {
			factors[n] = 0;
		}
		factors[n]++;
	};

	while (n % 2 === 0) {
		n = n / 2;
		addFactor(2);
	}

	for (var i = 3; i <= Math.sqrt(n); i += 2) {
		while (n % i === 0) {
			n = n / i;
			addFactor(i);
		}
	}

	if (n > 1) {
		addFactor(n);
	}

	return factors;
};

var smallestMultiple = function smallestMultiple(limit) {

	var factors = {};

	for (var i = 2; i <= limit; i++) {
		var newFactors = getPrimeFactors(i);

		for (var factor in newFactors) {
			if (!factors[factor] || factors[factor] < newFactors[factor]) {
				factors[factor] = newFactors[factor];
			}
		}
	}

	return Object.keys(factors).reduce(function (product, key) {
		return product * Math.pow(key, factors[key]);
	}, 1);
};