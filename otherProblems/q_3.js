// question: find the sum of numbers between
// the minimum and maximum numers in an array.

function findSum(array) {
  // Math function and array loop
  const maxNum = Math.max(...array);
  const minNum = Math.min(...array);

  console.log({ maxNum, minNum });
  console.log(
    array
      .filter((v) => v != maxNum && v != minNum)
      .reduce((val, acc) => val + acc, 0)
  );
}

findSum([1, 3, 3, 3, 4]);
