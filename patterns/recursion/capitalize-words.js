/**
 * Write a recursive function called capitalizeWords.
 * Given an array of words, return a new array containing each word capitalized.
 *
 * // let words = ['i', 'am', 'learning', 'recursion'];
 * // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 */

function capitalizeWords(words) {

    let result = [];

    function helperMethod(arr) {
        if (arr.length === 0) return

        result.push(arr[0].toUpperCase())

        helperMethod(arr.slice(1))
    }

    helperMethod(words)

    return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
