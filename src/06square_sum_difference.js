(() => {

	var squareDifference = (limit) => {

		var sumOfSquares = 0;
		var squareOfSums = 0;

		for(let i = 1; i <= limit; i++){
			squareOfSums += i;
			sumOfSquares += Math.pow(i, 2);
		}

		return Math.pow(squareOfSums, 2) - sumOfSquares;
	}

})();