
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param nums Given array
* @returns maxSum Result
*
*/

let kedaneMaxSubarraySum = function (nums) {

    let maxSum = Number.MIN_SAFE_INTEGER, curSum = 0;
    for (let i = 0; i < nums.length; ++i) {
        curSum += nums[i];
        if (curSum < 0) {
            curSum = 0;
        }

        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum;
}

let maxCircularSubarraySum = function (nums) {

    // Case 1: get the maximum sum using standard kadane'
    // s algorithm
    let maxSum = kedaneMaxSubarraySum(nums);

    // Case 2: Now find the maximum sum that includes
    // corner elements.
    let negNums = nums.map(el => -1 * el); // invert the array (change sign)
    let minSum = -1 * kedaneMaxSubarraySum(negNums);
    let totalSum = nums.reduce((acc, el) => acc + el);

    // The maximum circular sum will be maximum of two sums
    return Math.max(maxSum, (totalSum - minSum));

}

//Testcases
console.log('Testcase1');
console.log(maxCircularSubarraySum([10, -3, -4, 7, 6, 5, -4, -1]));

console.log('Testcase2');
console.log(maxCircularSubarraySum([8, -8, 9, -9, 10, -11, 12]));
