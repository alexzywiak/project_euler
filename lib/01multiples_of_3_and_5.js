"use strict";

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var getSum = function getSum(limit, multiples) {

	var mutiples = {};
	var sum = 0;

	multiples.forEach(function (mult) {
		var j = 1;
		while (j * mult < limit) {
			if (!multiples[mult * j]) {
				sum += mult * j;
				multiples[mult * j] = true;
			}
			j++;
		}
	});
	return sum;
};

console.log(getSum(1000, [3, 5]));