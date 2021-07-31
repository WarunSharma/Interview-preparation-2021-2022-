
/*
*
* @param nums Given array
* @param l start index of array
* @param mid Middle index of array
* @param r end index of array
* @returns sorted array
*
*/

// Merges two subarrays of array[].
// First subarray is arr[begin..mid]
// Second subarray is arr[mid+1..end]

function merge(nums, l, mid, r) {
    //Create resultant array
    let res = new Array(r - l);
    let i = l, j = mid + 1, k = 0;
    while (i <= mid && j <= r) {
        //Copy element from nums array to res by ascending order
        if (nums[i] < nums[j]) {
            res[k++] = nums[i++];
        }
        else {
            res[k++] = nums[j++];
        }
    }

    // Copy the remaining elements of nums
    while (i <= mid) {
        res[k++] = nums[i++];
    }

    // Copy the remaining elements of nums
    while (j <= r) {
        res[k++] = nums[j++];
    }

    i = l, j = r, k = 0;

    //Copy back sorted res array to nums array
    while (i <= j) {
        nums[i++] = res[k++];
    }
}

/*
*
* @param nums Given array
* @param l start index of array
* @param r end index of array
* @returns sorted array
*
*/

function mergeSort(nums, l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        mergeSort(nums, l, mid);
        mergeSort(nums, mid + 1, r);
        merge(nums, l, mid, r);
    }
    return nums;
}

//Testcases
console.log('Testcase1');
console.log(mergeSort([3, 5, 6, 1, 2], 0, 4));

console.log('Testcase2');
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10], 0, 6));