// Q__20: check string
//
/* 20: write a function to reverse a string without
using any built-in methods or library.
the function should take a string as input and 
return the reversed string.
*/

const reverseString = (string) => {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i];
  }

  return newString;
};

// reverseString("hello");
console.log(reverseString("hello"));
