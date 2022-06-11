// Your task is to write function factorial.

function factorial(n){
	let fact = 1
  for (let i = 1; i <= n; i++) {
		fact *= i
	}
	return fact
}

console.log(factorial(17), 355687428096000);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
