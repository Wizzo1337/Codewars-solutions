// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
  var result = 0
    for(var i=0;i<string.length;i++){
    result += parseInt(string[i],36)-9
    }
  return result
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
