// Determine the area of the largest square that can fit inside a circle with radius r.

function areaLargestSquare(r) {
  let diam = r*2
	return diam*r
}

console.log(areaLargestSquare(5), 50);
console.log(areaLargestSquare(7), 98);
console.log(areaLargestSquare(15), 450);
