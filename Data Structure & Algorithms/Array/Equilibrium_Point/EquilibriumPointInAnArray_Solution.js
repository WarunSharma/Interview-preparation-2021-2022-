
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param nums Given array
* @returns index Equilibrium point
*
*/

let equilibriumPoint = function (nums) {
    let prefixSum = 0, sum = 0, suffixSum = 0;

    // Sum of elements in nums
    sum = nums.reduce((acc, ele) => {
        return acc + ele;
    });

    for (let i = 0; i < nums.length; ++i) {
        //Suffix sum
        suffixSum = sum - prefixSum - nums[i];

        if (prefixSum == suffixSum) {
            return i;
        }

        //Prefix sum
        prefixSum += nums[i];
    }

    return -1;
}

//Testcases
console.log('Testcase1');
console.log(equilibriumPoint([1, 3, 5, 2, 2]));

console.log('Testcase2');
console.log(equilibriumPoint([1]));

console.log('Testcase3');
console.log(equilibriumPoint([1, 2]))