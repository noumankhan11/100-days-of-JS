// Q_3: Count Occurrences of character

/* write a function called countChar that takes two parameters: string
and a character to count. The function should return the 
number of times the specified charater appears in the string.
*/

const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    word = word.split('');
    // way_1:
    // let count = 0;
    // word.map((curelem) => char === curelem && count++);
    // way_2:
    let count = word.reduce((ecum, curElem) => {
        console.log(curElem, char);
        if (curElem === char) {
            ecum++;
        }
        return ecum;
    }, 0);
    console.log(count);
};
countChar('ThisIsNomi', 't');
