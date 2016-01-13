(() => {

	var isPrime = (n) => {
		
		if(n === 2) return true;

		for(let i = 3; i <= Math.sqrt(n); i++){
			if(n % i === 0){
				return false;
			}
		}
		return true;
	}

	var nthPrime = (n) => {
		var i = 1;
		var count = 1;

		while(count <= n){
			i += 2;
			if(isPrime(i)){
				count++;
			}
		}

		return i;
	}

})();