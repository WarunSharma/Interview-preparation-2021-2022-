

/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param nums Given array
* @returns Minimum Jumps
*
*/

let minimumNumber = function (nums) {

    if (nums[0] == 0) {
        return -1;
    }
    if (nums.length == 1) {
        return 0;
    }

    let reach = nums[0], stepsLeft = nums[0], jumps = 1;

    for (let i = 1; i < nums.length - 1; ++i) {
        //Calculate maximum reachable distance for the (i)th index
        reach = Math.max(reach, nums[i] + i);

        //Update steps;
        stepsLeft--;
        if (stepsLeft == 0) {
            ++jumps;
            if (i >= reach) {
                return -1;
            }
            stepsLeft = reach - i;
        }
    }

    return jumps;

}

//Testcases
console.log('Testcase1');
console.log(minimumNumber([1, 2, 3, 4, 5, 6]));

console.log('Testcase2');
console.log(minimumNumber([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));

console.log('Testcase3');
console.log(minimumNumber([1, 4, 3, 2, 6, 7]));