/**
 * Frequency Counter - sameFrequency
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 */

function sameFrequency(intA, intB){

    if (intB.toString().length !== intA.toString().length)
        return false;

    let intAFrequency = {};

    for (let num of "" + intA){
        intAFrequency[num] = (intAFrequency[num] || 0) + 1;
    }

    for (let num of "" + intB){
        if (!intAFrequency[num])
            return false;

        intAFrequency[num] --;
    }

    return true
}

console.log( sameFrequency(182, 281))
console.log( sameFrequency(34, 14))
console.log( sameFrequency(3589578, 5879385))
console.log( sameFrequency(22,222))
