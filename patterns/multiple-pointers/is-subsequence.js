/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters
 * in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear
 * somewhere in the second string, without their order changing.
 *
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 */


function isSubsequence(substring, string) {

    if (!substring) return true;

    if (substring.length > string.length || ((substring.length === string.length) && substring !== string))
        return false;

    let tempString = substring[0];

    let startingIndex = string.indexOf(tempString)

    if (startingIndex === -1) return false

    let lookupCharacterIndex = 1;

    for (let i = startingIndex + 1; i < string.length; i++){
        if (substring[lookupCharacterIndex] === string[i]){
            tempString += substring[lookupCharacterIndex]
            if (tempString === substring)
                return true
            lookupCharacterIndex++;
        }
    }

    return false;
}

function isSubsequence1(str1, str2) {
    let i = 0, j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
