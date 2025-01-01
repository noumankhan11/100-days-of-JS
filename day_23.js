// Question 4- Write function that takes a string as an input and give the number of vowels in it as an output.

function countVowels(str) {
  if (str.trim().length == 0) return 0;
  const vowels = "aioue";
  return str
    .toLowerCase() // case checking
    .trim() // removing spaces
    .split("") // splitting into an array
    .reduce((accum, elem) => {
      return vowels.includes(elem) ? accum + 1 : accum;
    }, 0);
}

console.log(countVowels("Hello"));
// output: 2
