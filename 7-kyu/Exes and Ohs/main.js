// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let strArr = str.split('');
	let xSum = 0;
	let oSum = 0;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i].toLowerCase() === 'x') {
			xSum += 1
		} else if (strArr[i].toLowerCase() === 'o') {
			oSum += 1
		}
	}
	if (xSum === oSum) {
		return true
	} else {
		return false
	}
}

console.log(XO(xo));
