/*
* 
* Time Complexity: O(nlogn)
* Space Compexity: O(1)
*
* @param nums Given array
* @returns result
*
*/

//Note: Majority element is present
let majorityElement = function (nums) {
    //Sort the array
    let sortedNums = nums.sort((a, b) => a - b);

    //If array has majority element which occurs more than n/2 times in an array, it must present at middle index
    return sortedNums[Math.floor(nums.length / 2)];
}

//Testcases
console.log('Testcase1');
console.log(majorityElement([3, 2, 3]));

console.log('Testcase2');
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));