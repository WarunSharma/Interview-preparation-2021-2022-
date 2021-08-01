
/*
* Time Complexity: O(nlogn)
* Space Complexity: O(1)
*
* @param nums Given Array
* @returns nums[i] Element
*/

var findDuplicate = function (nums) {

    for (let i = 0; i < nums.length; ++i) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            return Math.abs(nums[i]);
        }
        else {
            nums[Math.abs(nums[i]) - 1] = -1 * nums[Math.abs(nums[i]) - 1];
        }
    }

};

//Testcases
console.log('Testcase1')
console.log(findDuplicate([1, 1, 2]));

console.log('Testcase2')
console.log(findDuplicate([1, 3, 4, 2, 2]));

console.log('Testcase1')
console.log(findDuplicate([3, 1, 3, 4, 2]));

console.log('Testcase1')
console.log(findDuplicate([1, 1]));