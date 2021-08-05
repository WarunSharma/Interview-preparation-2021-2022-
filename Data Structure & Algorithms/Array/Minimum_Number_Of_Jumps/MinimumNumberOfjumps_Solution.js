
/*
*
* Time Complexity: O(n2)
* Space Complexity: O(n)
*
* @param nums Given array
* @returns Minimum Jumps
*
*/

let minimumNumber = function (nums) {
    let length = nums.length;

    //dp array for memoization
    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    //Can't move forward as first element is 0
    if (nums[0] == 0 && nums.length > 1) {
        return -1;
    }
    else {
        for (let i = 1; i < length; ++i) {
            for (let j = 0; j < i; ++j) {
                //Update dp array if lesser steps to reach at (i)th place
                if (dp[j] != Number.MAX_SAFE_INTEGER && nums[j] + j >= i) {
                    if (dp[j] + 1 < dp[i]) {
                        dp[i] = dp[j] + 1;
                    }
                }
            }
        }
    }

    if (dp[length - 1] != Number.MAX_SAFE_INTEGER) {
        return dp[length - 1];
    }
    return -1;

}

//Testcases
console.log('Testcase1');
console.log(minimumNumber([1, 2, 3, 4, 5, 6]));

console.log('Testcase2');
console.log(minimumNumber([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));

console.log('Testcase3');
console.log(minimumNumber([1, 4, 3, 2, 6, 7]));