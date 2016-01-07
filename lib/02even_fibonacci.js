"use strict";

var evenSum = function evenSum(limit) {

	var sum = 2;

	var fib = function fib(a, b) {

		var next = a + b;

		if (next < limit) {

			if (next % 2 === 0) {
				sum += next;
			}

			fib(b, next);
		}
	};

	fib(1, 2);

	return sum;
};