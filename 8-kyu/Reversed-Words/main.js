// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str) {
	return str.split(' ').reverse().join(' ')
}

console.log(reverseWords('hello world!'), 'world! hello');
console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
console.log(reverseWords('foobar'), 'foobar');
