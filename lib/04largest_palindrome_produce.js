'use strict';

var isPalindrome = function isPalindrome(n) {
	return n.toString().split('').reverse().join('') === n.toString();
};

var largestPalidromeProduct = function largestPalidromeProduct() {

	var a = 999,
	    max = 0;

	for (; a >= 100; a--) {

		for (var b = a; b >= 100; b--) {
			var prod = a * b;
			if (prod < max) {
				break;
			}
			if (isPalindrome(prod) && prod > max) {
				max = prod;
			}
		}
	}

	return max;
};