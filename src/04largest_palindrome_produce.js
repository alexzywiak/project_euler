let isPalindrome = (n) => {
	return n.toString().split('').reverse().join('') === n.toString();
}

let largestPalidromeProduct = () => {

	let a = 999,
			max = 0;

	for(; a >= 100; a--){

		for(let b = a; b >= 100; b--){
			let prod = a * b;
			if(prod < max){
				break;
			}
			if(isPalindrome(prod) && (prod) > max){
				max = prod;
			}
		}
	}

	return max;
}

