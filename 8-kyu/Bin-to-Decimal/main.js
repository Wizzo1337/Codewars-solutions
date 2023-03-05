// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
  let numArr = bin.split('')
  let newNum = 0
  for (let i = 0; i < numArr.length; i++) {
    newNum += (Math.pow(2, numArr.length - 1 - i) * (Number(numArr[i])))
  }
  return newNum
}

console.log(binToDec('1111'), 15)
console.log(binToDec('1001001'), 73)
