// Q__5:  Sort ascending
/*write a program to sort an array of numbers in
an ascending order.*/

// const sortAscending = (arr) => {
//     return arr.sort((a, b) => a - b);
// };

// console.log(sortAscending([9, 3, 1, 10, 5, 6]));

function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);
