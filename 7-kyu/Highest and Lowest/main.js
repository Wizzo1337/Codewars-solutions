function highAndLow(numbers){
  let numArr = numbers.split(' ').sort((a,b) => a - b);
  return `${numArr[numArr.length - 1]} ${numArr[0]}`
}
