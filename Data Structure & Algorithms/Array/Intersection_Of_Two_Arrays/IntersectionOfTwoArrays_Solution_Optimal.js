
/*
* Time Complexity: O(n+m)
* Space Complexity: O(1)
*
* @param nums1 Given array 1
* @param nums2 Given array 2
* @returns res Resultant array
*
*/

let intersectionOfTwoArrays = function (nums1, nums2) {
    let res = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            res.push(nums1[i]);
            ++i;
            ++j;
        }
        else if (nums1[i] < nums2[j]) {
            ++i;
        }
        else {
            ++j;
        }
    }
    return res;
}

//Testcases
console.log('Testcase1');
console.log(intersectionOfTwoArrays([1, 2, 3, 5, 4], [2, 3, 1, 9]));

console.log('Testcase2');
console.log(intersectionOfTwoArrays([1, 2, 3, 5, 2, 2], [2, 3, 1, 1, 1]));

console.log('Testcase1');
console.log(intersectionOfTwoArrays([1,], [1, 1]));

console.log('Testcase1');
console.log(intersectionOfTwoArrays([], [2, 3, 1, 9]));