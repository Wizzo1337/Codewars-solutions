// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

var splitInParts = function(s, partLength) {
	let sArr = s.split('');
	let newArr = [];
	for (let i = 0; i < sArr.length; i += partLength) {
		newArr.push(sArr.slice(i, i + partLength).join(''));
	}
	return newArr.join(' ');
};

console.log(splitInParts('supercalifragilisticexpialidocious', 3), 'sup erc ali fra gil ist ice xpi ali doc iou s');
console.log(splitInParts('HelloKata', 1), 'H e l l o K a t a');
console.log(splitInParts('HelloKata', 9), 'HelloKata');
