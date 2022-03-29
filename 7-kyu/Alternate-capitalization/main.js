// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
  let firstCap = s.split('').map(function (ele, ind, arr) {
		if (ind % 2 === 0) {
			return ele.toUpperCase()
		} else return ele
	}).join('')
	let secondCap = s.split('').map(function (ele, ind, arr) {
		if (ind % 2 !== 0) {
			return ele.toUpperCase()
		} else return ele
	}).join('')
	return [firstCap, secondCap]
};

console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
