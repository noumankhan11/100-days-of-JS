// Q__10: remove duplicate
//
/* 12: write a function that takes an array of integers as input and 
removes any duplicate elements, returning a new array with only 
unique elements
  */

const arr = [99, 33, 55, 77, 77, 33];
const arr2 = [1, 2, 2, 3, 4, 4];

// ***************************
//       My Solution
// ***************************

// =======Did'nt works==========

// const removeDubplicate = function (arr) {
//   const newArr = arr.filter((num) => !arr.includes(num));
//   console.log(newArr);
// };

// removeDubplicate(arr);

// ******************************
//    Solution Provided
// ******************************

const removeDubplicate = (arr) => (newArr = [...new Set(arr)]);

console.log(removeDubplicate(arr));
console.log(removeDubplicate(arr2));
