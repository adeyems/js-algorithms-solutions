/**
 * capitalizeFirst
 * Write a recursive function called capitalizeFirst.
 * Given an array of strings, capitalize the first letter of each string in the array.
 *
 * capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

capitalizeFirst()
function capitalizeFirst(array) {
    if (!Array.isArray(array)) return

    let result = [];

    function helperMethod(arr) {
        if (typeof arr[0] != "string") return
        if (!arr.length) return result

        result.push(capitalizeFirstLetterOfAWord(arr[0]))

        helperMethod(arr.slice(1))
    }

    helperMethod(array)

    return result;
}

const capitalizeFirstLetterOfAWord = word => word.charAt(0).toLocaleUpperCase() + word.substr(1);

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']))
