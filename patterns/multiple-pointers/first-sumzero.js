/**
 * Write a function called sumZero which accepts a SORTED
 * array of integers. The function should find the first pair
 * where the sum is O. Return an array that includes both
 * values that sum to zero or undefined if a pair does not exist
 * sumzero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumzero([-2,0,1,3]) // undefined
 * sumzero([1,2,3]) // undefined
 */


function firstSumZero(array){
   let left = 0;
   let right = array.length - 1;

   while (left < right){
       let sum = array[left] + array[right]
       if (sum === 0)
           return [array[left], array[right]]
       else if (sum > 0)
           right --;
       else left++;
   }

   return undefined;
}

console.log(firstSumZero([-3,-2,-1,0,1,2,3]))
console.log(firstSumZero([-2,0,1,3]));
console.log(firstSumZero([1,2,3]))
