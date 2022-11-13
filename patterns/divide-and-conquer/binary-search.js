/**
 * An Example
 * Given a sorted array of integers, write a function called search,
 * that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1
 *
 */

function search(array, key) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        if (array[mid] < key)
            min = mid + 1;

        else if (array[mid] > key)
            max = mid - 1;

        else return mid;
    }

    return -1;
}

console.log(search ( [1, 2, 3, 4, 5, 6],4)) // 3
console.log(search ( [1, 2, 3, 4, 5, 6, 1], 6)) // 5
console.log(search ( [1, 2, 3, 4, 5, 6],11)) // -1
