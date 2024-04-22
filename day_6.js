// Q__6:  palindrome string
//
/*write a program to determine wheter a given string
is a palindrome or not.*/

// my way == not exactly correct and lenghthy
// function isPalindrome(str) {
//     str = str.toLowerCase().trim();
//     let myArr = str.split(' ');
//     reverseString = myArr
//         .map((item) => item.split('').reverse().join(''))
//         .join(' ');
//     console.log(reverseString);
//     return str === reverseString ? true : false;
// }


// solution

function isPalindrome(str) {
    str = str.toLowerCase().replace(/\W/g, ''); //will remove all the speacial character and white spaces
    let reverseString = str.split('').reverse().join('');
    console.log(reverseString);
    return str === reverseString ? true : false;
}

console.log(isPalindrome('A man, a plan, a canal, Panama'));
