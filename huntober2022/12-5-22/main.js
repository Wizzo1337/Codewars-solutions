// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  var myObj = {}
  string.split('').forEach(function (ele) {
    myObj[ele] ? myObj[ele]++ : (myObj[ele] = 1)
  })
  return myObj
}

console.log(count('aba'), { a: 2, b: 1 })
console.log(count(''), {})
console.log(count('abaxxxtttt'), { a: 2, b: 1 })
