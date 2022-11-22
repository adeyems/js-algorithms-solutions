/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 * productOfArray([1,2,3]) // 6
 * productOfArray([1,2,3,10]) // 60
 */

function productOfArray(array) {
    if (!array.length) return

    if (typeof array[0] === "undefined")
        return 1;

    return  +array[0] * productOfArray(array.slice(1))
}

console.log(productOfArray([1, 2, 3, 4, 5])); // 120
console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60
