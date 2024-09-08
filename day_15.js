// Q__14: find minimum number
//
/* 14: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array,

*/

function findMin(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    // return Math.min(...arr);
    arr = arr.sort((a, b) => a > b);
    return arr[0];
  }
}

console.log(findMin([1, 2, 3, 4]));
console.log(findMin([-15, -3, 4, 2]));
console.log(findMin([5, -3, -3, 4, 2]));
console.log(findMin([]));
