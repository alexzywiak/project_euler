
let evenSum = (limit) => {

	var sum = 2;

	let fib = (a, b) => {

		let next = a + b;

		if(next < limit){

			if(next % 2 === 0){
				sum += next;
			}

			fib(b, next);
		}
	}

	fib(1, 2);

	return sum;
}