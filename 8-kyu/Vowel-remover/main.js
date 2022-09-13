// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata

// function shortcut (string) {
//   return string.split('').filter(elm => !elm.includes('a')).filter(elm => !elm.includes('e')).filter(elm => !elm.includes('i')).filter(elm => !elm.includes('o')).filter(elm => !elm.includes('u')).join('')
// }

function shortcut(str) {
	return str.split('').filter((elm) => ['a', 'e', 'i', 'o', 'u'].indexOf(elm) == -1).join('');
}

console.log(shortcut('hello'), 'hll');
console.log(shortcut('how are you today?'), 'hw r y tdy?');
