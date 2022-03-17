// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let a = array.join('')
	let ascendArr = array.sort((a, b) => a - b).join('')
	let descendArr = array.sort((a, b) => b - a).join('')
	if (ascendArr === a) {
		return 'yes, ascending';
	} else if (descendArr === a) {
		return 'yes, descending';
	} else {
		return 'no';
	}
}

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');
