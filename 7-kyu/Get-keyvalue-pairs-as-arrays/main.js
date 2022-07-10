// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?


function keysAndValues(data){
	let newArr = []
  newArr.push(Object.keys(data))
	newArr.push(Object.values(data))
	return newArr
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}));
console.log(keysAndValues({}));
