// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a,b) {
    // Temporary array, containing all values from a, which are not contained in b
    let diffArray = [];
    // Looping over a
    for(let i = 0; i < a.length; i++) {
        // Per default we say that b does not contain a
        let bContainsAValue = false;
        // Loop over b
        for(let y = 0; y < b.length; y++) {
            // If any value in b is the same as the current value from a, we set bContainsAValue to true
            if(a[i] === b[y]) bContainsAValue = true;
        }
        // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
        if(!bContainsAValue) diffArray.push(a[i]);
    }
    // In the end we return the temporary array
    return diffArray;
}

// function arrayDiff(a, b) {
//     // Filter entire a array, only keep the value if b does not contain that value
//     return a.filter(val => !b.includes(val));
// }

console.log(arrayDiff([1, 2], [1]), '[2]');
console.log(arrayDiff([1, 2, 2], [1]), '[2,2]');
console.log(arrayDiff([1, 2, 2], [2]), '[1]');
console.log(arrayDiff([1, 2, 2], []), '[1,2,2]');
console.log(arrayDiff([], [1, 2]), '[]');
console.log(arrayDiff([1, 2, 3], [1, 2]), '[3]');
