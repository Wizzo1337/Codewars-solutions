// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

function digitize(n) {
	let stringNum = String(n).split('')
	let arr = []
	for (let i = 0; i < stringNum.length; i++) {
		arr.push(Number(stringNum[i]))
	}
	return arr
}

console.log(digitize(123), [1,2,3]);
console.log(digitize(0), [0]);
console.log(digitize(1230), [1,2,3, 0]);
console.log(digitize(8675309), [8,6,7,5,3,0,9]);
