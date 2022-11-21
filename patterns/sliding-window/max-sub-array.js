/***
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * @param arr
 * @param num
 * @returns {number|null}
 */

function maxSubarraySum(arr, num) {

    if (arr.length < num)
        return null;

    let maxSubArraySum = 0;
    let tempMaxSubArraySum = 0;

    // sub the first num elements

    for (let i = 0; i < num; i++) {
        maxSubArraySum += arr[i];
    }

    tempMaxSubArraySum = maxSubArraySum;

    // add the next element to the current sum and subtract the starting element to the sum
    // and compare to the previous maxSubArraySum to find the new maxSubArraySum

    for (let i = num; i < arr.length; i++){
        tempMaxSubArraySum = tempMaxSubArraySum - arr[i - num] + arr[num];
        maxSubArraySum = Math.max(maxSubArraySum, tempMaxSubArraySum);
    }

    return maxSubArraySum;
}

console.log(maxSubarraySum ([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4,2,1,6], 1)) // 6
console.log(maxSubarraySum ( [4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([],4)) // null
