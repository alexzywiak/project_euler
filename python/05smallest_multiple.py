#!/usr/bin/env python -tt
import sys

def get_factors(n):
	factors = {}
	d = 2
	while n > 1:
		while n % d == 0:
			n /= d
			if d in factors:
				factors[d] += 1
			else:
				factors[d] = 1
		d += 1
	return factors


def smallest_multiple(n):
	
	factor_hash = {}

	for i in range(0, n):
		i_hash = get_factors(i)

		for factor in i_hash:
			if factor in factor_hash:
				factor_hash[factor] = factor_hash[factor] if (factor_hash[factor] > i_hash[factor]) else i_hash[factor]
			else:
				factor_hash[factor] = i_hash[factor]

	print factor_hash

	product = 1

	for factor in factor_hash:
		product = product * (factor**factor_hash[factor])

	return product



def main():
  n = sys.argv[1]
  print smallest_multiple(int(n))

if __name__ == "__main__":
	main()