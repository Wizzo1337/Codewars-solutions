// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

function reverseString(str) {
  let arr = []
  for (let i = str.length -1; i >= 0; i--) {
    arr.push(str[i])
  }
  return arr.join('')
}

console.log(reverseString('abc'), 'cba')
console.log(reverseString('thomas'), 'samoht')
