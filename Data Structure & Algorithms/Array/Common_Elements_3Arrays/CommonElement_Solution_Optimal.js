/*
*
* Time Complexity: O(n)
* Space Complexity: O(n)
*
* @param arr1 Array 1
* @param arr2 Array 2
* @param arr3 Array 3
* @returns res Reultant array
*
*/

function commonElements(arr1, arr2, arr3) {

    // Initialize starting indexes
    // for arr1[], arr2[] and
    // arr3[]
    let i = 0, j = 0, k = 0;

    // Declare three variables prev1,
    // prev2, prev3 to track
    // previous element
    // Initialize prev1, prev2,
    // prev3 with INT_MIN
    let prev1 = Number.MIN_SAFE_INTEGER;
    let prev2 = Number.MIN_SAFE_INTEGER;
    let prev3 = Number.MIN_SAFE_INTEGER;

    let n1 = arr1.length;
    let n2 = arr2.length;
    let n3 = arr3.length;
    let res = [];

    // Iterate through three arrays
    // while all arrays have
    // elements
    while (i < arr1.length && j < arr2.length && k < arr3.length) {

        // If arr1[i] = prev1 and i < n1,
        // keep incrementing i
        while (arr1[i] == prev1 && i < n1) {
            ++i;
        }

        // If arr2[j] = prev2 and j < n2,
        // keep incrementing j
        while (arr2[j] == prev2 && j < n2) {
            ++j;
        }

        // If arr3[k] = prev3 and k < n3,
        // keep incrementing k
        while (arr3[k] == prev3 && k < n3) {
            ++k;
        }

        // If x = y and y = z, print
        // any of them, update
        // prev1 prev2, prev3 and move
        //ahead in each array
        if (arr1[i] == arr2[j] && arr1[i] == arr3[k]) {
            res.push(arr1[i]);
            prev1 = arr1[i++];
            prev2 = arr2[j++];
            prev3 = arr3[k++];
        }

        // If x < y, update prev1
        // and increment i
        else if (arr1[i] < arr2[j]) {
            prev1 = arr1[i++];
        }

        // If y < z, update prev2
        // and increment j
        else if (arr2[j] < arr3[k]) {
            prev2 = arr2[j++];
        }

        // We reach here when x > y
        // and z < y, i.e., z is
        // smallest update prev3
        // and imcrement k
        else {
            prev3 = arr3[k++];
        }
    }
    return res;
}

//Testcases
console.log('Testcase1')
console.log(commonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]));

console.log('Testcase2')
console.log(commonElements([1, 2, 3], [4, 5, 6], [7, 8, 9]))