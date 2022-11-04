// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap (numbers){
  let sortArr = numbers.sort((a,b) => a-b)
	return Math.max(...sortArr.map((itm, idx, arr) => arr[idx+1] ? Math.abs(itm - arr[idx+1]) : itm - itm))
}

console.log(maxGap([13,10,2,9,5]),4);
console.log(maxGap([13,3,5]),8);
console.log(maxGap([-3,-27,-4,-2]),23);
console.log(maxGap([1,1,1]),0);
