// Q__8:  Facturial Finder
//
/*write a function factorial that takes a non-negative
integer num as input and returns its factorial.*/

// factourial of 3 = 3*2*1 = 6
// factourial of 4 = 4*3*2*1 = 24
// factourial of 4 = 5*4*3*2*1 = 120

function factorial(num) {
  console.log("up");

  if (num < 0) return;
  let number = 1;
  for (let i = 1; i <= num; i++) {
    number = number * i;
  }

  return number;
}

console.log(factorial(5));

// method two using Recursion function
function factorial(n) {
  console.log("down");
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
