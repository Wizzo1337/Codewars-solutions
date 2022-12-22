function merge(char, num) {
  let charArr = char.split('')
  let newArr = []
	if (num) {
		let numArr = num.split('')
		for (let i = 0; i < num.length; i++) {
			if (charArr[i]) {
				newArr.push(charArr[i])
				newArr.push(numArr[i])
			} else {
				newArr.push(numArr[i])
			}
		}
		return newArr.join('')
	} else {
		return char
	}
}

console.log(merge('abc'), 'abc')
console.log(merge('abc', '123'), 'a1b2c3')
console.log(merge('abc', '123456'), 'a1b2c3456')
