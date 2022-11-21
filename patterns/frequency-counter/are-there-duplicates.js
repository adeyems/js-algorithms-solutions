/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

function areThereDuplicates(...args) {
    let frequencyCounter = {}

    for (let i of args){
        if (frequencyCounter[i])
            return true;

        frequencyCounter[i] = true;
    }

    return false;
}

function areThereDuplicates1(... arguments) {
    console.log(new Set(arguments))
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates1(1, 2, 3))
console.log(areThereDuplicates1(1, 2, 2))
console.log(areThereDuplicates1('a', 'b', 'c', 'a'))
