// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	let newArr = [];
	word.split('').map( function (ele, ind, arr) {
		if (ele === ele.toUpperCase()) {
			newArr.push(ind)
		}
	})
	return newArr
};

console.log(capitals('CodEWaRs'), [0,3,4,6] );
