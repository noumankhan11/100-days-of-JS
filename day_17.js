// Q__17: sum of squares
//
/* 17: write a function to calculate the sum of squares 
of all elements in an array. For example,given the array
[1,2,3], the function should return 14 becaouse 
1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.
*/

function sumOfSquares(arr) {
  const sum = arr.reduce(function (total, value) {
    return total + value * value;
  });

  return sum;
}

console.log(sumOfSquares([1, 2, 3])); // 14
