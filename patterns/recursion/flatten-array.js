/**
 * Write a recursive function called flatten which accepts an array of arrays
 * and returns a new array with all values flattened.
 *
 * flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 * flatten([[1],[2],[3]]) // [1,2,3]
 * flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
 */

function flatten(array) {
    let result = [];

    function helperMethod(arr) {
        if (!arr.length) return result;

        if (!Array.isArray(arr[0]))
            result.push(arr[0])
        else helperMethod(arr[0])

        helperMethod(arr.splice(1))
    }

    helperMethod(array)

    return result;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5])
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5])
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3)
