/**
 * Write a function called findLongestSubstring,which accepts a string
 * and returns the length of the longest substring with all distinct characters.
 *
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 */

function findLongestSubstring(string) {
     if (!string) return 0;

     let start = 0;
     let longestSubstringLength = 0;
     let seen  = {};

     for (let i = 0; i < string.length; i++) {
         let char = string[i];

         if (seen[char])
             start = Math.max(seen[char], start);

         longestSubstringLength = Math.max(longestSubstringLength, i - start + 1)

         seen[char] = i + 1;
     }

     return longestSubstringLength;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit'))// 6
