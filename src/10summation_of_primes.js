
let summationOfPrimes = (limit) => {
	
	let composites = {},
			primes = [];

	for(let i = 2; i < limit; i++){
		if(!composites[i]){
			primes.push(i);
			for(let j = i; j * i < limit; j++){
				composites[i * j] = true;
			}
		}
	}

	return primes.reduce((sum, val) => {
		return sum + val;
	});
}