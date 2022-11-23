/**
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object which may contain nested objects.
 *
 * var obj1 = {
 *   outer: 2,
 *   obj: {
 *     inner: 2,
 *     otherObj: {
 *       superInner: 2,
 *       notANumber: true,
 *       alsoNotANumber: "yup"
 *     }
 *   }
 * }
 *
 * var obj2 = {
 *   a: 2,
 *   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
 *   c: {c: {c: 2}, cc: 'ball', ccc: 5},
 *   d: 1,
 *   e: {e: {e: 2}, ee: 'car'}
 * };
 */


const isEmptyObject = obj => !!obj  && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;

const isObject = obj => typeof obj === "object" && obj !== null && !Array.isArray(obj)

function nestedEvenSum(obj) {
    let result = 0;

    let i = 0

    function helper(subObj) {
        if (isEmptyObject(subObj)) return
        let currentKey = Object.keys(subObj)[0];

        if (typeof subObj[currentKey] === "number") {
            if (subObj[currentKey] % 2 === 0) {
                result += subObj[currentKey];
            }
        }
        else if (isObject(subObj[currentKey])){
            helper(subObj[currentKey])
        }

        i++;

        delete subObj[currentKey]

        helper(subObj)
    }

    helper(obj);

    return result;
}

const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10
