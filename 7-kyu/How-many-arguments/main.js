// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

// Create a function called args_count that returns the number of arguments provided

function args_count (...args) {
	return args.length
}

console.log(args_count(1, 2), 2)
console.log(args_count(), 0)
console.log(args_count('A', 'B', 'C'), 3)
console.log(args_count(['foo', 'bar']), 1)
