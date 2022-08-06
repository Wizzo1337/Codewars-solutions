// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
	let stringNum = x.filter(ele => typeof ele === 'string').map(ele => Number(ele)).reduce((acc, ele) => acc += ele,0)
	let num = x.filter(ele => typeof ele === 'number').reduce((acc, ele) => acc += ele,0)
	return num - stringNum
}

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
console.log(divCon(["2","1",5,8,"3",6,"9","5","7",2,4,1,4,"1","9","7",1,6]), -7);
