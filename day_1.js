//  Q1: Find the Longest World in a String

// Q: Write a function findLongestWord that takes a string as input and returns the longest word the string. if there are multiple longest words, return the first one encountered.

// Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
// the function should ignore leading and trailing and  whitespaces when determining the longest word.

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }

    words = str.split(' ');

    // way 1 =
    //         ===
    // words = words.sort((a, b) => a.length - b.length);

    // return words[words.length - 1];// to get the last element of an array
    // return words.at(-1); // same as (aray.length -1) // It was introduced in ECMAScript 2022 (ES2022)

    // way2 =
    //         ===
    return words.reduce(
        (accum, curWord) =>
            curWord.length > accum.length ? curWord : accum,
        ''
    );
};

console.log(
    findLongestWord(
        'Nomi is a good boy and a javaScript developers programmer'
    )
);
