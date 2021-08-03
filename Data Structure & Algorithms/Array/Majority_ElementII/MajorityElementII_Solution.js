
/*
*
* Time Complexity: O(n2)
* Space Complexity: O(1)
*
* @param nums Given array
* @returns res Resultant array
*
*/

//There can only be 2 elements maximum which can occur more than n/3 times in the array
let majorityElementII = function (nums) {
    let sortedNums = nums.sort((a, b) => a - b);

    let count = 1;
    let res = [];
    for (let i = 0; i < sortedNums.length - 1; ++i) {
        for (let j = i + 1; j < sortedNums.length; ++j) {
            if (sortedNums[i] == sortedNums[j]) {
                count++;
            }
            else {
                if (count > Math.floor(sortedNums.length / 3)) {
                    res.push(sortedNums[i]);
                }
                count = 1;
                break;
            }
        }
    }
    if (count > Math.floor(sortedNums.length / 3)) {
        res.push(sortedNums[nums.length - 1]);
    }

    return res;
}

//Testcases
console.log('Testcase1');
console.log(majorityElementII([3, 2, 3]));

console.log('Testcase1');
console.log(majorityElementII([1]));

console.log('Testcase1');
console.log(majorityElementII([1, 2]));