// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value){
  if (String(value).length === 5) {
		return `Value is ${value}`
	} else if (String(value).length === 4) {
		return `Value is 0${value}`
	} else if (String(value).length === 3) {
		return `Value is 00${value}`
	} else if (String(value).length === 2) {
		return `Value is 000${value}`
	} else if (String(value).length === 1) {
		return `Value is 0000${value}`
	}
}


console.log(solution(5),"Value is 00005");
console.log(solution(1204),"Value is 01204");
console.log(solution(109),"Value is 00109");
console.log(solution(0),"Value is 00000");
