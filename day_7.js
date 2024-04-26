// Q__7:  maximum number in array
//
/*write a function findMax that takes and array of 
of numbers as an input and returns the maximum number
in the array*/


function findMax(arr){
  // my solution
//   arr = arr.sort((a,b)=> a-b)
//  return   arr[arr.length -1 ]
//  solution provided

return Math.max(...arr)
 
}

console.log(findMax([-2,-3,-1,-3,-5,-7,-5,-3])) // -1

