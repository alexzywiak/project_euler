#!/usr/bin/env python -tt
import sys

def sum_square_diff(n):
	total = 0
	square_total = 0

	for i in range(1, n + 1):
		total += i
		square_total += (i ** 2)

	return (total ** 2) - square_total

def main():
  print sum_square_diff(int(sys.argv[1]))


if __name__ == "__main__":
	main()