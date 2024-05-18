// Q__10: count vovels
//
/* 13: write a function that takes a string as input and returns 
the count of vowels in that strign. Consider "a" , "e", "i", "o", "u",
as vowels (both lovercase and uppercase)
  */

// ***************************
//      Solution
// ***************************

function countVovels(str) {
  let setOfVovels = ["a", "e", "i", "o", "u"];
  let count = 0;
  myArr = str.replaceAll(" ", "").split("");

  for (let char of myArr) {
    if (setOfVovels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countVovels("Helloo nomi World"));
