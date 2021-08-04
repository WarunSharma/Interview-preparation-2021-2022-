
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param intervals Given array
* @returns res Resultant array
*
*/

let mergeIntervals = function (intervals) {

    //Sort the array
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];

    //Insert first element
    res.push(intervals[0]);
    for (let i = 1; i < intervals.length; ++i) {

        //Top element in res is not ovverlapping with (i)th element in intervals
        if (intervals[i][0] > res[res.length - 1][1]) {
            res.push(intervals[i]);
        }
        else {
            //In case  of Overlapping interval modify end element of res top element 
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
        }
    }
    return res;
}

//Testcases
console.log('Testcase1');
console.log(mergeIntervals([[8, 10], [1, 6], [15, 18]]));

console.log('Testcase2');
console.log(mergeIntervals([[1, 4], [4, 5]]));

console.log('Testcase3');
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
