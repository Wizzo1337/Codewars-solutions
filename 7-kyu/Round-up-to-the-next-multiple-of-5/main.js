// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
  if (n === 0 ) return 0
	else if ((n+0) % 5 === 0) return n+0
	else if ((n+1) % 5 === 0) return n+1
	else if ((n+2) % 5 === 0) return n+2
	else if ((n+3) % 5 === 0) return n+3
	else if ((n+4) % 5 === 0) return n+4
}

console.log(roundToNext5(5));
