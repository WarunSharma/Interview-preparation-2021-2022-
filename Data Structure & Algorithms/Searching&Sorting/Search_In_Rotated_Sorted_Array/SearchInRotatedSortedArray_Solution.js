
/*
*
* @param nums Given array
* @param target Target element
* @returns index
*
*/

function searchInRotatedSortedArray(nums, target) {
    let low = 0, high = arr.length - 1, mid;

    while (high - low > 1) {
        mid = Math.floor((low + high) / 2);
        //If first half is sorted
        if (arr[low] < arr[mid]) {
            //target is present in first half
            if (target >= arr[low] && target <= arr[mid]) {
                high = mid;
            }
            //target is present in second half
            else {
                low = mid;
            }
        }
        //Second half is sorted
        else {
            //target is present in second half
            if (target >= arr[mid] && target <= arr[high]) {
                low = mid;
            }
            //target is present in first half
            else {
                high = mid;
            }
        }
    }

    //Either low or high is the result, else -1
    if (arr[low] == target)
        return low;
    if (arr[high] == target)
        return high;

    return -1;
}

//Testcases
console.log('Testcase1');
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0));

console.log('Testcase2');
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 4));

console.log('Testcase1');
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 1));

console.log('Testcase1');
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 6));