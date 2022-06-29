// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

const unluckyDays = year => {
  let unlucky = 0;
  for (x = 0; x < 12; x++) {
    unlucky += new Date(year, x, 13).getDay() === 5 ? 1 : 0;
  }
  return unlucky;
}


console.log(unluckyDays(1586), 1, "should be: 1");
console.log(unluckyDays(1001), 3, "should be: 3");
console.log(unluckyDays(2819), 2, "should be: 2");
