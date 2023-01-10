// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
	let newArr = []
	let catYears = 0
	let dogYears = 0
	newArr.push(humanYears)
	for (let i = humanYears; i > 0; i--) {
		if (i === 1) {
			catYears += 15
		} else if (i === 2) {
			catYears += 9
		} else {
			catYears += 4
		}
	}
	newArr.push(catYears)
	for (let i = humanYears; i > 0; i--) {
    if (i === 1) {
      dogYears += 15
    } else if (i === 2) {
      dogYears += 9
    } else {
      dogYears += 5
    }
  }
	newArr.push(dogYears)
	return newArr
}

console.log(humanYearsCatYearsDogYears(1), [1, 15, 15])
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24])
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64])
