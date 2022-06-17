// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
	let bumpCount = x.split('').reduce((acc,ele) =>  ele === 'n' ? acc + 1 : acc,0)
	if (bumpCount <= 15) {
		return 'Woohoo!'
	} else {
		return 'Car Dead'
	}
}

console.log(bump("n"), "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
console.log(bump("______n___n_"), "Woohoo!");
