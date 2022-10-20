// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// const solve = x =>  Math.max(...x.split(/[^aoeiu]/i).map(x => x.length))

function solve(s){
 return s.split(/[^aeiou]/i).map(x => x.length).sort((a,b) => b-a)[0]
}

console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
