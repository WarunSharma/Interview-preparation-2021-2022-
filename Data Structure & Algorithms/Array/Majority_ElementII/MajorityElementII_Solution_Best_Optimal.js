
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param nums Given array
* @returns res Resultant array
*
*/

//There can only be 2 elements maximum which can occur more than n/3 times in the array
let majorityElementII = function (nums) {
    let res = [];

    let num1 = -1, num2 = -2, occurrence1 = 0, occurrence2 = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == num1) {
            occurrence1++;
        }
        else if (nums[i] == num2) {
            occurrence2++;
        }
        else if (occurrence1 == 0) {
            num1 = nums[i];
            occurrence1++;
        }
        else if (occurrence2 == 0) {
            num2 = nums[i];
            occurrence2++;
        }
        else {
            occurrence1--;
            occurrence2--;
        }
    }

    occurrence1 = 0, occurrence2 = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == num1) {
            occurrence1++;
        }

        if (nums[i] == num2) {
            occurrence2++;
        }
    }

    if (occurrence1 > Math.floor(nums.length / 3)) {
        res.push(num1)
    }

    if (occurrence2 > Math.floor(nums.length / 3)) {
        res.push(num2)
    }

    return res;
}

//Testcases
console.log('Testcase1');
console.log(majorityElementII([3, 2, 3]));

console.log('Testcase2');
console.log(majorityElementII([1]));

console.log('Testcase3');
console.log(majorityElementII([1, 2]));