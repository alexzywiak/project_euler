let getPrimeFactors = (n) => {
	
	let factors = {}

	let addFactor = (n) => {
		if(factors[n] === undefined){
			factors[n] = 0;
		}
		factors[n]++;
	}

	while(n % 2 === 0){
		n = n / 2;
		addFactor(2);
	}

	for(let i = 3; i <= Math.sqrt(n); i += 2){
		while(n % i === 0){
			n = n / i;
			addFactor(i);
		}
	}

	if(n > 1){
		addFactor(n);
	}

	return factors;
}

let smallestMultiple = (limit) => {

	let factors = {};

	for(let i = 2; i <= limit; i++){
		let newFactors = getPrimeFactors(i);

		for(let factor in newFactors){
			if(!factors[factor] || factors[factor] < newFactors[factor]){
				factors[factor] = newFactors[factor];
			}
		}
	}

	return Object.keys(factors).reduce((product, key) => {
		return product * Math.pow(key, factors[key]);
	}, 1);
}