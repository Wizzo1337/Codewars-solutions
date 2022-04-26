// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
	let reverseStr = x.toLowerCase().split('').reverse().join('');

	if (reverseStr === x.toLowerCase()) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalindrome('aba'), true);
