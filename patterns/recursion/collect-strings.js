/**
 * Write a function called collectStrings which accepts an object
 * and returns an array of all the values in the object that have a typeof string
 *
 * const obj = {
 *     stuff: "foo",
 *     data: {
 *         val: {
 *             thing: {
 *                 info: "bar",
 *                 moreInfo: {
 *                     evenMoreInfo: {
 *                         weMadeIt: "baz"
 *                     }
 *                 }
 *             }
 *         }
 *     }
 * }
 */
const isEmptyObject = obj => !!obj  && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;

const isObject = obj => typeof obj === "object" && obj !== null && !Array.isArray(obj)

function collectStrings(obj) {
    let result = [];

    function helper(subObj) {
        if (isEmptyObject(subObj)) return
        let currentKey = Object.keys(subObj)[0];
        let currentValue = subObj[currentKey];

        if (typeof subObj[currentKey] === "string") result.push(currentValue)

        else if (isObject(subObj[currentKey])){
            helper(subObj[currentKey])
        }

        delete subObj[currentKey]

        helper(subObj)
    }

    helper(obj)

    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))
