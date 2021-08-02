
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param nums Given array
* @returns res Result
*
*/

let longestLengthEvenOddSubarray = function (nums) {
    let maxLength = 1, curLength = 1;
    for (let i = 1; i < nums.length; ++i) {
        if ((nums[i] % 2 == 0 && nums[i - 1] % 2 == 1) || (nums[i] % 2 == 1 && nums[i - 1] % 2 == 0)) {
            ++curLength;
        }
        else {
            maxLength = Math.max(curLength, maxLength);
            curLength = 1;
        }
    }

    maxLength = Math.max(curLength, maxLength);
    return maxLength;
}

//Testcases
console.log('Testcase1');
console.log(longestLengthEvenOddSubarray([1, 2, 3, 4, 5, 7, 9]));

console.log('Testcase2');
console.log(longestLengthEvenOddSubarray([1, 2, 3, 4, 5]));

console.log('Testcase3');
console.log(longestLengthEvenOddSubarray([1, 3, 5]));