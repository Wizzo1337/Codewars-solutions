// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
	let newArr = []
	for (let i = 0; i < str.length; i++) {
		newArr.push(str.charCodeAt(i))
	}
  if (newArr.filter((ele,ind) => newArr.indexOf(ele) !== ind).length >= 1) {
		return false
	} else {
		return true
	}
}

console.log(hasUniqueChars("  nAa"),false) // because there are two spaces ' ';
console.log(hasUniqueChars("abcdef"),true);
console.log(hasUniqueChars("aA"),true) // case - sensitivity;
console.log(hasUniqueChars("++-"),false) // because there are two '+';

//check a character if it matches any other character in the string
//
