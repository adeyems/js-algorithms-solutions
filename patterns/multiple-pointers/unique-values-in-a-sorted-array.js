/**
 * Number of unique values in a sorted array
 * @param arr
 * @returns {number}
 *
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted
 */

function uniqueValuesInASortedArray(arr){
    if (!arr.length) return 0

    let i = 0;
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

console.log(uniqueValuesInASortedArray([1,2,2,5,7,7,9,9,99]))
