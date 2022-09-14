function camelize(str) {
	return str.split('-').map((ele, ind, arr) => ind == 0 ? ele : ele[0].toUpperCase() + ele.slice(1)).join('');
}

console.log(camelize('background-color'), 'backgroundColor');
console.log(camelize('list-style-image'), 'listStyleImage');
console.log(camelize('-webkit-transition'), 'WebkitTransition');
