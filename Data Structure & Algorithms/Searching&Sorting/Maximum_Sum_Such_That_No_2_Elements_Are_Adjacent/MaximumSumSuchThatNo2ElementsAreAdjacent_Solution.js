
/*
*
* @param i index of array
* @param nums given array
* @param dp array for memoization
*
*/

//Explained solution: https://www.youtube.com/watch?v=49RVi7m94LE

function maximumSum(i, nums, dp) {
    if (i <= -1) {
        return 0;
    }
    //Check is state has been saved
    if (dp[i] != -1) return dp[i];
    //Choose the current index
    let a1 = nums[i] + maximumSum(i - 2, nums, dp);
    //Skip the current index
    let a2 = maximumSum(i - 1, nums, dp);
    return dp[i] = Math.max(a1, a2);
}

//Testcases
console.log('Testcase1');
console.log(maximumSum(5, [5, 5, 10, 100, 10, 5], new Array(10000).fill(-1)));

console.log('Testcase2');
console.log(maximumSum(2, [1, 2, 3], new Array(10000).fill(-1)));