
/*
*
* Time Complexity: O(n)
* Space Complexity:O(1)
*
* @param nums Given array
* @returns maxDiff Maximum Difference
*
*/


let maximumDifference = function (nums) {

    //Initialize
    let currDiff = 0, maxDiff = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; ++i) {

        //Replace min with new minimum value in the nums
        if (min > nums[i]) {
            min = nums[i];
        }

        //Recalculate CurrDiff 
        currDiff = nums[i] - min;

        //Replace maxDiff with new current Difference and previous maximum Difference
        maxDiff = Math.max(currDiff, maxDiff);
    }

    return maxDiff;
}

//Testcases
console.log('Testcase1');
console.log(maximumDifference([2, 3, 10, 6, 4, 8, 1]));

console.log('Testcase2');
console.log(maximumDifference([7, 9, 5, 6, 3, 2]));