// Q__14: power of two
//
/* 14: Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.
A power of two is a number that can be expressed as 2 raised to an integer power.
============
Notice:
1. Zero (0) and negative integers are not considered powers of two.
2. The function should return true if ther given number is a power of 2, and false otherwise.
*/

function isPowerOfTwo(num) {
  if (isNaN(num)) {
    return false;
  }
  if (num <= 0) {
    return false;
  }
  if (num % 2 !== 0) {
    return false;
  }
  if (num % 2 == 0) {
    return true;
  }
}

console.log("7: ", isPowerOfTwo(7));
console.log("8: ", isPowerOfTwo(8));
console.log("0: ", isPowerOfTwo(0));
console.log("-1: ", isPowerOfTwo(-1));
console.log("string: ", isPowerOfTwo("hey"));
