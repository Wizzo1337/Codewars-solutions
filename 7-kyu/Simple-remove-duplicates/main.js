// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
// Example:

// For input: [3, 4, 4, 3, 6, 3]

//     remove the 3 at index 0
//     remove the 4 at index 1
//     remove the 3 at index 3

// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

function solve(arr) {
	let newArr = []
  for (let i = arr.length; i > 0; i--) {
		let poppedEle = arr.pop()
		if (!newArr.includes(poppedEle)) {
			newArr.push(poppedEle)
		}
	}
	return newArr.reverse()
}

console.log(solve([3,4,4,3,6,3]),[4,6,3]);
console.log(solve([1,2,1,2,1,2,3]),[1,2,3]);
console.log(solve([1,2,3,4]),[1,2,3,4]);
