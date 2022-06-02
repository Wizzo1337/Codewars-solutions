// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


function mygcd(x,y){
  if (x>y) {
		return Math.round(x/y) * 2
	} else if (y>x || y===x) {
		return Math.round(y/x)
	}
}

console.log(mygcd(30,12),6);
console.log(mygcd(8,9),1);
console.log(mygcd(1,1),1);
console.log(mygcd(40, 15));
