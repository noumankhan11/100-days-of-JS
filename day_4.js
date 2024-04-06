// Q__2:  find triangle Type:

/* Write a function called checkTriangleType that takes three
parameters and represeting the lenghts of the sides of a triangle.
the function should return a string indicating the type of triangle:
"equilateral", "isosceles", or "scalene". */

// AI genrated code :
/*const checkTriangleType = (a1, a2, a3) => {
    if (a1 === 0 || a2 === 0 || a3 == 0) return 'Not a Triangle';
    let maxSide = Math.max(a1, a2, a3);
    let minSide = Math.min(a1, a2, a3);
    let sideRatio = (maxSide - minSide) / minSide;
    console.log((maxSide - minSide) / minSide);

    if (sideRatio > 5) {
        return 'Not a Triangle';
    } else if (a1 === a2 && a2 === a3) {
        return 'Equilateral';
    } else if (a1 === a2 || a2 === a3) {
        return 'Isosceles';
    } else {
        return 'Scalene';
    }
};
*/
// my code:
const checkTriangleType = (a1, a2, a3) => {
    if (a1 === a2 && a2 === a3) return 'Equilateral';
    if (a1 == a2 || a2 === a3 || a1 === a3) return 'Isosceles';
    return 'Scalene';
};

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(4, 3, 2));
