
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param nums Given array
* @returns res Resultant array
*/

let leardersInArray = function (nums) {

    let res = [];
    let k = -1;
    for (let i = 0; i < nums.length; ++i) {
        while (res.length > 0 && nums[i] > res[k]) {
            res.pop();
            --k;
        }
        res.push(nums[i]);
        ++k;
    }
    return res;
}

//Testcases
console.log('Testcase1');
console.log(leardersInArray([16, 17, 4, 5, 2]));

console.log('Testcase2');
console.log(leardersInArray([1, 2, 3, 4, 5]));

console.log('Testcase3');
console.log(leardersInArray([5, 4, 3, 2, 1]));