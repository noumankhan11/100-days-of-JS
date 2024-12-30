// Q__21: find the average of numbers
//
/* 21: write a function called calculationMean 
that takes an array of numbers as input and 
returns the mean(average) of those numbers.
// TODO: The mean is the average of a set of 
 numbers, or the numeric value that represents
 the center of a collection of numbers.
*/

function calculateMean(array) {
  let sum = 0;
  if (array.length <= 0) return 0;
  sum = array.reduce((prevVal, curVal) => {
    return (sum = prevVal + curVal);
  }, 0);

  return sum / array.length;
}
console.log(calculateMean([1, 2, 3, 4, 5])); // output: 3

// Question - Write a function that takes an array of
// Numbers as an input and returns the largest number.

function findLargeNum(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 1];
}

console.log(findLargeNum([9, 8, 5, 4, 2, 1, 6, 7]));
// output: 9
