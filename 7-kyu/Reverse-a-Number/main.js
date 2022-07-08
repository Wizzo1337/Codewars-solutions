// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples

//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
	if (n === 0) {
		return 0
	}

  let numArr = n.toString().split('')
	let newNumArr = []

	for (let i = numArr.length-1; i >= 0; i--) {
		if (Number(numArr[i]) >= 1)
		newNumArr.push(numArr[i])
	}
	if (Math.sign(n) === -1) {
		return -Number(newNumArr.join(''))
	} else {
		return Number(newNumArr.join(''))
	}
}

console.log(reverseNumber(123), 321);
console.log(reverseNumber(-123), -321);
console.log(reverseNumber(1000), 1);
console.log(reverseNumber(0), 0);
