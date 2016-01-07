
var isPrime = (n) =>{
	
	if(n === 2) return true;

	for(let i = 2; i <= Math.sqrt(n); i++){
		if(n % i === 0) return false;
	}

	return true;
};

var largestPrime = (n) => {
	for(let i = Math.ceil(Math.sqrt(n)); i >= 2; i--){
		if(n % i === 0){
			if(isPrime(i)){
				return i;
			}
		}
	}
};