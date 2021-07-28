
/*
*
* @param nums Given array
* @param n size of array
* @param sum GIven Sum
* @returns result
*
*/


function countTriplets(arr, n, sum) {
    //Initialize the result
    let result = 0;
    //Sort an array
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    //Fix the first element
    for (let i = 0; i < n - 2; i++) {
        //Two pointer approach
        //left is index of second element
        //right is index of third element
        let left = i + 1, right = n - 1;
        while (left < right) {
            // If sum of current triplet is more or equal,
            // move right corner to look for smaller values
            if (arr[i] + arr[left] + arr[right] >= sum) {
                right--;
            }
            // Else move left corner
            else {
                // This is important. For current i and j, there
                // can be total k-j third elements.
                result += right - left;
                ++left;
            }
        }
    }

    return result;
}

//Testcases
console.log('Testcase1');
console.log(countTriplets([-2, 0, 1, 3], 4, 2));

console.log('Testcase2');
console.log(countTriplets([5, 1, 3, 4, 7], 5, 12));

console.log('Testcase3');
console.log(countTriplets([30, 8, 23, 6, 10, 9, 31, 7, 19, 20, 1, 33, 21, 27, 28, 3, 25, 26], 18, 86));