/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has
 * its corresponding value squared in the second array.
 * The frequency of values must be the same.
 */


function same(array1, array2) {

    // check if the lengths of the 2 array are the same
    if (array1.length !== array2.length)
        return false;

    let frequencyCounter = {};

    for (let value of array2){
        frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
    }

    for (let key of array1){
        if (!frequencyCounter[key ** 2])
            return false
        else frequencyCounter[key ** 2] --;

    }
    return true;
}

function same1(array1, array2) {

    // check if the lengths of the 2 array are the same
    if (array1.length !== array2.length)
        return false;

    // push each character in array1 into an object - key as the character with value as the frequency
    let array1FrequencyCounter = {};
    let array2FrequencyCounter = {};

    for (let key of array1){
        array1FrequencyCounter[key] = (array1FrequencyCounter[key] || 0) + 1;
    }

    for (let key of array2){
        array2FrequencyCounter[key] = (array2FrequencyCounter[key] || 0) + 1;
    }

    // console.log(array1FrequencyCounter, array2FrequencyCounter);

    // check if the square of each element in array1 exists in array 2 and have the same frequency
    for (let key in array1FrequencyCounter){
        if ((!array2FrequencyCounter[key ** 2] )|| (array2FrequencyCounter[key ** 2] !== array1FrequencyCounter[key]))
            return false
    }

    return true;
}

// Test
console.log(same ([1,2,3], [4,1,9])) // true
console.log(same ( [1,2,3], [1, 9])) // false
console.log(same ( [1,2,1], [4,4,1]))
console.log(same([1,2,3,2,5], [9,1,4,4,11]));
console.log(same([1,2,3,2,5], [9,1,4,4,25]));

console.log(same1([1,2,3], [4,1,9])) // true
console.log(same1 ( [1,2,3], [1, 9])) // false
console.log(same1 ( [1,2,1], [4,4,1]))
console.log(same1([1,2,3,2,5], [9,1,4,4,11]));
console.log(same1([1,2,3,2,5], [9,1,4,4,25]));
