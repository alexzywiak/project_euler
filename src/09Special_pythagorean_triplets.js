let triplets = (x) => {

	let m = 1, n;

	for(; m < (x/2); m++){
		n = ((x/2)/m) - m;
		if(m > n && n % 1 === 0){
			let a, b, c;
			a = 2 * m * n;
			b = Math.pow(m, 2) - Math.pow(n, 2);
			c = Math.pow(m, 2) + Math.pow(n, 2);
			return a * b * c;
		}
	}
	return -1;
}