#!/usr/bin/env python -tt
import sys
import math

def is_prime(n):
	if n == 2:
		return True

	if n % 2 == 0:
		return False

	sqrt = int(math.ceil(math.sqrt(n)))
	
	for i in range(3, sqrt + 1, 2):
		if n % i == 0:
			return False

	return True


def get_nth_prime(n):
	
	i = 3
	primes = [2]

	while len(primes) < n:
		if is_prime(i):
			primes.append(i)
		i += 2

	return primes[-1]



def main():
  print get_nth_prime(int(sys.argv[1]))

if __name__ == "__main__":
	main()