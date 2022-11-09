// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function domainName(url) {
	if (url.split('/')[0].includes('http')) {
		return url.split('/')[2].replace('www.', '').split('.')[0];
	} else if (url.split('/')[0].includes('www')) {
		return url.split('.')[1];
	} else {
		return url.split('/')[0].split('.')[0];
	}
}

console.log(domainName('http://github.com/carbonfive/raygun'), 'github');
console.log(domainName('http://www.zombie-bites.com'), 'zombie-bites');
console.log(domainName('https://www.cnet.com'), 'cnet');
console.log(domainName('okc6l1ac.org/warez/'), 'okc6l1ac');
console.log(domainName('www.yahoo.com', 'yahoo'));
