
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param nums Given array
* @returns res Resultant array
*/

let leardersInArray = function (nums) {

    let max = Number.MIN_SAFE_INTEGER, res = [];

    for (let i = nums.length - 1; i >= 0; --i) {
        if (nums[i] > max) {
            res.push(nums[i]);
            max = nums[i];
        }
    }

    res = res.reverse();

    return res;
}

//Testcases
console.log('Testcase1');
console.log(leardersInArray([16, 17, 4, 5, 2]));