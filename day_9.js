// Q__9: Calculate the Avrage
//
/*write a function called calculateAverage that takes
an array of numbers as input and returns the 
average of those numbers*/

const myArr = [5, 10, 2, 8];
function calculateAverage(arr) {
  // add Math.round() method if ther is any decimal numbers
  return arr.reduce((accu, cur) => accu + cur, 0) / myArr.length;
}

console.log(calculateAverage(myArr));
