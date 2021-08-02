/*
* 
* Time Complexity: O(nlogn)
* Space Compexity: O(1)
*
* @param nums Given array
* @returns result
*
*/

//Boyer Moore Voting Algorithm
let majorityElement = function (nums) {

    //Assign first element as majority Element
    let majorElement = nums[0];
    let count = 1;

    //Compare majority element
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] == majorElement) {
            ++count
        }
        else {
            count--;
        }

        if (count == 0) {
            count = 1;
            majorElement = nums[i];
        }
    }

    count = 0;

    //Check the count of the majority element in array
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == majorElement) {
            ++count;
        }
    }

    //If count is greater than half length of the array
    if (count >= Math.floor(nums.length / 2) + 1) {
        return majorElement;
    }
    else {
        return 'No Majority element';
    }

}

//Testcases
console.log('Testcase1');
console.log(majorityElement([3, 2, 3]));

console.log('Testcase2');
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

console.log('Testcase3');
console.log(majorityElement([2, 2, 1, 1, 1, 2]));