// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = (
  s // your perfect code...
) => {
	return s
    .split(' ')
    .filter((ele, idx, arr) => ele !== arr[idx+1]).join(' ')
}


  console.log(
    removeConsecutiveDuplicates(
      'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
    ),
    'alpha beta gamma delta alpha beta gamma delta'
  )
