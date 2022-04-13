// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
	let sortNum =  numbers.sort((a,b) => a-b);
	return sortNum[0] + sortNum[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
