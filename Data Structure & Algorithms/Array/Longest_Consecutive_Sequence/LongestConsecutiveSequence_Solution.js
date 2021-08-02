/*
*
* Time Complexity: O(nlogn)
* Space Complexity:O(1)
*
* @param nums Given array
* @returns res Result
*
*/

let longestConsecutiveSequence = function (nums) {

    // Empty array or single element array, no meaning of consecutive elements
    if (nums.length == 0 || nums.length == 1)
        return nums.length;
    //Sort the array
    let sortedNums = nums.sort((a, b) => a - b);

    //Define current sequence count and result
    let curSeqCount = 1, res = 1;
    for (let i = 1; i < sortedNums.length; ++i) {

        //If elements are consecutive increment sequence count
        if (sortedNums[i] == sortedNums[i - 1] + 1) {
            ++curSeqCount;
        }

        //If consecutive elements then skip
        else if (sortedNums[i] == sortedNums[i - 1]) {
            continue;
        }

        //If elements are not consecutive reinitialize current sequence count
        else {
            curSeqCount = 1;
        }

        res = Math.max(res, curSeqCount);
    }

    return res;
}

//Testcases
console.log('Testcase1')
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));

console.log('Testcase2')
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

console.log('Testcase3')
console.log(longestConsecutiveSequence([1, 1, 1]));

console.log('Testcase4')
console.log(longestConsecutiveSequence([1, 1, 1, 2, 2]));