
/* Find first and last occurence of K
*  Time Complexity: O(n)
*  Space Complexity: O(1)
*/

/*
*
* @param nums Given Array
* @param k Element to search
* @returns First and Last occuence of k in nums
*
*/
function findFirstAndLastOccurence(nums, k) {
    let first = -1;
    let last = -1;
    //Linear Search
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === k) {
            if (first == -1) {
                first = i;
            }
            last = i;
        }
    }

    console.log(first, last);
}

//Testcases
console.log('Testcase1');
findFirstAndLastOccurence([1, 2, 2, 2, 3, 4], 2);

console.log('Testcase2');
findFirstAndLastOccurence([1, 2, 3, 4], 2);
