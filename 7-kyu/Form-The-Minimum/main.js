// Task

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:

//     Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//     Input >> Output Examples

// minValue ({1, 3, 1})  ==> return (13)

// Explanation:

// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)

// Explanation:

// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

// Explanation:

// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

function minValue(values){
  return Number(values.sort((a,b) => a-b).filter(function (ele,ind,arr) {
		if (ele === arr[ind + 1]) {
			return false
		} else return true
	}).join(''))
}

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([1,3]), 13);
