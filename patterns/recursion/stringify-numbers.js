/**
 * Write a function called stringifyNumbers which takes in an object and
 * finds all the values which are numbers and converts them to strings.
 * Recursion would be a great way to solve this!
 *
 * /*
 * let obj = {
 *     num: 1,
 *     test: [],
 *     data: {
 *         val: 4,
 *         info: {
 *             isRight: true,
 *             random: 66
 *         }
 *     }
 * }
 *
 */

const isEmptyObject = obj => !!obj  && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;

const isObject = obj => typeof obj === "object" && obj !== null && !Array.isArray(obj)

function stringifyNumbers(obj) {
    let newObj = {};
    if (isEmptyObject(obj)) return
    for (let key in obj) {
        if (typeof obj[key] === "number")
            newObj[key] = obj[key].toString();

        else if (isObject(obj[key]))
            newObj[key] = stringifyNumbers(obj[key]);

        else newObj[key] = obj[key]
    }

    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))
