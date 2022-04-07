// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.split('').filter(function (el) {
		if (el === 'a' || el === 'A' || el === 'e' || el === 'E' || el === 'i' || el === 'I' || el === 'o' || el === 'O' || el === 'U' || el === 'u') {
			return false
		} else {
			return true
		}
	}).join('');
}

console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
