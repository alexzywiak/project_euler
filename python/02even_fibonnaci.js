#!/usr/bin/env python -tt

def main():
	fib_sum = 2
	fib = (1, 2)

	while fib[1] < 4000000:
		
		fib = (fib[1], fib[0] + fib[1])
		
		if fib[1] % 2 == 0:
			fib_sum += fib[1]

	print fib_sum

if __name__ == "__main__":
	main()