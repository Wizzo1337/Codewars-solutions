// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
	let newWord = ''
	for (let i = 0; i < x.length; i++) {
		if (x[i] === 'a') {
			newWord += 'b'
		} else if (x[i] === 'b') {
			newWord += 'a'
		} else {
			newWord += 'c'
		}
	}
	return newWord
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');
