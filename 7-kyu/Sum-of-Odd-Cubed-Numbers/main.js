// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
	if (arr.some((itm) => typeof itm === 'string')) {
		return undefined;
	} else {
		let odd = arr.filter((itm) => itm % 2 !== 0).reduce((acc, itm) => acc + Math.pow(itm, 3), 0);
		return odd
	}
}

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(['a', 12, 9, 'z', 42]), undefined);
