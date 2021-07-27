
/*
*
* @param nums Given array
* @returns res Resultant array containing repeating and missing element
*
*/

//The idea here is to use the given array itself to keep track of visited numbers
function findMissingAndRepeating(nums) {
    let res = [];
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] < 0 && Math.abs(nums[i]) == i + 1) {
            res.push(Math.abs(nums[i]));
        }
        else {
            nums[Math.abs(nums[i]) - 1] = -1 * nums[i]; //This can be done by using the absolute value of a number as an index and marking the corresponding number present at that index. A number can be marked by negating its value.
        }
    }

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }

    return res;
}

//Testcases
console.log('Testcase1');
console.log(findMissingAndRepeating([1, 3, 3]));

console.log('Testcase2');
console.log(findMissingAndRepeating([2, 2]));