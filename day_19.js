// Q__19: check string
//
/* 19: write a function to check if the given string is 
starts with a specific substring.
*/
const startsWith = (str, subStr) => {
  // return str.split(" ")[0].toLowerCase() === subStr.toLowerCase();
  // return str.toLowerCase().startsWith(subStr.toLowerCase());
  return (
    str.slice(0, subStr.length).toLowerCase() === subStr.toLowerCase()
  );
};

// startsWith("Hello world", "world");
console.log(startsWith("Hello world", "hello")); // : true
console.log(startsWith("Hello world", "world")); // : false
