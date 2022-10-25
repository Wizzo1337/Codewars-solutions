// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1

function solution(fullText, searchText){
	let regex = new RegExp (searchText, 'g')
	return fullText.match(regex) ? fullText.match(regex).length : 0
}

console.log(solution('abcdeb','b'), 2);
console.log(solution('abc','b'), 1);
console.log(solution('abbc','bb'), 1);
