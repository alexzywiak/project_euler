"use strict";

(function () {

	var squareDifference = function squareDifference(limit) {

		var sumOfSquares = 0;
		var squareOfSums = 0;

		for (var i = 1; i <= limit; i++) {
			squareOfSums += i;
			sumOfSquares += Math.pow(i, 2);
		}

		return Math.pow(squareOfSums, 2) - sumOfSquares;
	};

	console.log(squareDifference(10));
	console.log(squareDifference(100));
})();