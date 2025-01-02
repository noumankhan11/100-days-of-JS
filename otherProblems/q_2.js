// Question 6- Write a function that checks if a given number is prime or not.

function isNumPrime(num) {
  return num % 2 === 0 ? false : true;
}

console.log(isNumPrime(3245423)); // expect: false true
