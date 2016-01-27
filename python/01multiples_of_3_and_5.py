#!/usr/bin/python -tt
def main():

	i = 0
	multiples_sum = 0
	
	while i < 1000:
		if i % 3 == 0 or i % 5 == 0:
			multiples_sum += i

		i += 1

	print multiples_sum

if __name__ == "__main__":
	main()