// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

function correct(string) {
	let newStrArr = [];
	let strArr = string.split('');
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === '5') {
			newStrArr.push('S')
		} else if (strArr[i] === '0') {
			newStrArr.push('O')
		}	else if (strArr[i] === '1') {
			newStrArr.push('I')
		}	else {
			newStrArr.push(strArr[i])
		}
	}
	return newStrArr.join('')
}
