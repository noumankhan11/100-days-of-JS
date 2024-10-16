// Q__16: String to spcifice case!
//
/* 14: Write a function to convert a string to camelCase & snake_case

*/

function toCamelCase(str) {
  return str
    .split(" ")
    .map((e, i) => {
      let elem = e.toLowerCase();

      return i != 0 ? elem.at(0).toUpperCase() + elem.slice(1) : elem;
    })
    .join("");
}

// console.log(toCamelCase("heLlo world NomI")) output: helloWorld

// console.log(toCamelCase("HeLlo worlD nomI"));

// snakeCase
const toSnakeCase = function (str) {
  return str
    .split(/(?=[A-Z])/)
    .map((e) => e.toLowerCase())
    .join("_");
};

console.log(toSnakeCase("helloWorld")); // Output: hello_world
console.log(toSnakeCase("MyNameIsJohn")); // Output: hello_world
