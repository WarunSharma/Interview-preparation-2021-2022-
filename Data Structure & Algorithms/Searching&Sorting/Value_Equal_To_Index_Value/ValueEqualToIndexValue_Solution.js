
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param arr Given array
* @param n Size of array
* @returns res resultant array
*
*/

/*
* Linear Search
*/
function valueEqualToIndex(arr, n) {
    let res = [];
    for (let i = 0; i < n; ++i) {
        if (arr[i] == i + 1) {
            res.push(arr[i]);
        }
    }
    res = res.length > 0 ? res : res = ["Not Found"]
    return res;
}

console.log("Testcase1");
console.log(valueEqualToIndex([34, 23, 12], 3));

console.log("Testcase2");
console.log(valueEqualToIndex([34, 23, 12, 4, 56, 6], 6));