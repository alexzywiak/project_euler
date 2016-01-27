#!/usr/bin/env python -tt

import math
import sys

def largest_prime_factor(n):

	factors = []
	d = 2
	
	while n > 1:
		while n % d == 0:
			n /= d
			factors.append(d)
		d += 1

	return max(factors)


def main():
	args = sys.argv[1:]
	print largest_prime_factor(int(args[0]))


if __name__ == "__main__":
	main()