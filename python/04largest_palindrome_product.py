#!/usr/bin/env python

def is_palindrome(n):
	return str(n) == str(n)[::-1]

def largest_palindrome_product():

	max_palindrome = 0

	for x in range(999, 100, -1):

		for y in range(x, 100, -1):

			n = x * y
			
			if n > max_palindrome and is_palindrome(n):
				max_palindrome = n

	return max_palindrome

def main():
	print largest_palindrome_product()

if __name__ == "__main__":
	main()