// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let getSum = (limit, multiples) => {

	let mutiples = {};
	let sum = 0;

	multiples.forEach(mult => {
		let j = 1;
		while((j * mult) < limit){
			if(!multiples[mult * j]){
				sum += mult * j;
				multiples[(mult * j)] = true;
			}
			j++;
		}
	});
	return sum;
}

console.log(getSum(1000, [3,5]));