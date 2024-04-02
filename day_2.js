// Q__2:  Hash Tag Genrator
//

/* you are required to implement a function
 genrateHash that generates a hash tag from a 
 given input string .*/

/* The input string should be converted to a hash
 tag fomat, where each word is capitalized and 
 concatenated  togather whout spaces.*/
/*IF the length of the input string is greater than 
 280 characters or if the input string is empty or
 contains only whitespaces , the function should return false.*/
//  otherwise the function should return ther generated hash tag prefixed with #
//
// generateHash("i am nomi khan")
// output: #IAmNomiKhan
const generateHash = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }
    let words = str.split(' ');
    // 1=
    // words = words
    //     .map((e) => e[0].toUpperCase() + e.slice(1))
    //     .join(' ');

    // 2=
    words =
        '#' +
        words
            // .map((e) => e.replace(e[0], e[0].toUpperCase()))
            // ==========OR ============
            .map(
                (elem) => elem.charAt(0).toUpperCase() + elem.slice(1)
            )
            .join('');

    console.log(words);
    // 3=
    // words = words
    //     .reduce((ecum, curItem) => {
    //         // console.log(curItem.slice(1));
    //         ecum +=
    //             '#' +
    //             curItem.charAt(0).toUpperCase() +
    //             curItem.slice(1) +
    //             ' ';
    //         return ecum;
    //     }, '')
    //     .trim();
    // console.log(words);
};

generateHash('Hello i am nouman khan');
