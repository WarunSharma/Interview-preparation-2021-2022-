/*
*
* Time Complexity: O(nlogn)
* Space Complexity: 0(1)
*
* @param nums Given array
* @returns inversions no. of inversion counts 
*
*/

let inversions = 0;

function merge(nums, low, mid, high) {
    let left = [], right = [];
    let i = low, k = low, j = mid + 1;
    while (i <= mid) {
        left.push(nums[i++]);
    }
    while (j <= high) {
        right.push(nums[j++]);
    }
    i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            nums[k] = left[i];
            ++k;
            ++i;
        }
        else {
            inversions += left.length - i;
            nums[k] = right[j];
            k++;
            j++;
        }
    }

    while (i < left.length) {
        nums[k] = left[i];
        ++k;
        ++i;
    }

    while (j < right.length) {
        nums[k] = right[j];
        ++k;
        ++j;
    }
}

function mergeSort(nums, low, high) {
    if (low == high)
        return;

    let mid = Math.floor((low + high) / 2);
    mergeSort(nums, low, mid);
    mergeSort(nums, mid + 1, high);
    merge(nums, low, mid, high);
}

function countInversions(nums) {
    if (nums.length == 0 || nums.length == 1)
        return 0;

    mergeSort(nums, 0, nums.length - 1);
    return inversions;
}

//Testcases
console.log('Testcase1');
console.log(countInversions([8, 4, 2, 1]));

inversions = 0;
console.log('Testcase2');
console.log(countInversions([3, 1, 2]))

inversions = 0;
console.log('Testcase3');
console.log(countInversions([1, 2, 3, 4]))

inversions = 0;
console.log('Testcase4');
console.log(countInversions([]))