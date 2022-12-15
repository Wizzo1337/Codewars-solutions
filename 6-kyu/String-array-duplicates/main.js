// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
	return s.map((ele, idx, arr) => ele.split('').filter((ele, idx, arr) => ele !== arr[idx+1]).join(''))
};

console.log(
  dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']),
  ['codewars', 'picaniny', 'hubububo']
)
console.log(dup(['abracadabra', 'allottee', 'assessee']), [
  'abracadabra',
  'alote',
  'asese',
])
console.log(dup(['kelless', 'keenness']), ['keles', 'kenes'])
