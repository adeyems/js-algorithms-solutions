/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another,
 * such as cinema, formed from iceman.
 * @param string1
 * @param string2
 */

function isAnagram(string1, string2) {

    if (string1.length !== string2.length){
        return false;
    }

    let frequencyCounter1 = splitStringIntoFrequencyCounter(string1);

    for (let key of string2){
        if (!frequencyCounter1[key]){
            return false;
        }
        else frequencyCounter1[key] --;
    }

    return true;

}

function splitStringIntoFrequencyCounter(string){
    let frequencyCounter = {};

    for (let char of string){
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }

    return frequencyCounter;
}

// Test
console.log(isAnagram('', '')) // true
console.log(isAnagram('aaz', 'zza')) // false
console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram("rat","car")) // false) // false
console.log(isAnagram('awesome', 'awesom')) // false
console.log(isAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(isAnagram('qwerty', 'qeywrt')) // true
console.log(isAnagram('texttwisttime', 'timetwisttext')) // true
