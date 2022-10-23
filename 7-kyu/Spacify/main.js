// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
	let splitStr = str.split('')
	let newArr = []
	for (let i = 0; i < splitStr.length; i++) {
		if (i === splitStr.length -1) {
			newArr.push(splitStr[i])
		} else {
			newArr.push(splitStr[i])
			newArr.push(' ')
		}
	}
	return newArr.join('')
}

console.log(spacify('hello world'),'h e l l o   w o r l d');
console.log(spacify('12345'),'1 2 3 4 5');
