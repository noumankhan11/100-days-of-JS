// Q__18: check string case
//
/* 18: write a function to check if the given string is 
upperCase or lowerCase;
*/

const isUpperCase = (str) => {
  if (str === str.toUpperCase()) return true;
  return false;
};
const isLowerCase = (str) => {
  if (str === str.toLowerCase()) return true;
  return false;
};

console.log(isUpperCase("N"));
console.log(isLowerCase("n"));
