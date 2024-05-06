// Q__10: check the array are equal to another
//
/*write a function called arraysAreEqual that takes two 
arrays arr1 and arr2 as input and returns true if 
the arrays are equal (i.e., contain the same elements
  in the same order and false otherwise.
  */

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // mysolution =
  // return arr1.join("") === arr2.join("") ? true : false;
  // **********************
  // solution provided =
  return arr1.every((curVal, index) => curVal === arr2[index]);
}

console.log(arraysAreEqual([1, 34, 3], [1, 2, 3]));
console.log(arraysAreEqual([], []));
