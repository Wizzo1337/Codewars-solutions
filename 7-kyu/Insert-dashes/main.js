// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  let strArr = [...String(num)]
	let newArr = []
	for (let i = 0; i < strArr.length; i++) {
		if (Number(strArr[i]) % 2 !== 0 && Number(strArr[i+1]) % 2 !== 0 && strArr[i+1] !== undefined) {
			newArr.push(strArr[i], '-')
		} else {
			newArr.push(strArr[i])
		}
	}
	return newArr.join('')
}

console.log(insertDash(454793),'4547-9-3');
console.log(insertDash(123456),'123456');
console.log(insertDash(1003567),'1003-567');
