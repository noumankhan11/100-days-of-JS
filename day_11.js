// Q__10: sum of numbers
//
/*write a function that takes a number as an input 
and returns the sum of digits.
  */
// ***************************
//       My Solution
// ***************************
function sumTheNumber(num) {
  return num
    .toString()
    .split("")
    .reduce((total, curval) => {
      return (total = total + Number(curval));
    }, 0);
}
// ******************************
//    Solution Provided
// ******************************

const sumOfDigits = (num) => {
  let arr = Array.from(String(num), Number);
  return arr.reduce((a, b) => (a += b), 0);
};

console.log(sumOfDigits(1231));

console.log(sumTheNumber(1234));
console.log(sumTheNumber(4321));
console.log(sumTheNumber(123456));
