
/*
https://www.geeksforgeeks.org/selection-sort/

Selection Sort
Difficulty Level : Easy
Last Updated : 28 Jun, 2021
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
1) The subarray which is already sorted. 
2) Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
Following example explains the above steps: 
 

 

arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64 

*/

function selectionSort(nums){
    let temp;
    for(let i=0;i<nums.length-1;++i){
        let minIdx=i;
        for(let j=i+1;j<nums.length;++j){
            if(nums[j]<nums[minIdx]){
                minIdx=j;
            }
        }
        temp=nums[minIdx];
        nums[minIdx]=nums[i];
        nums[i]=temp;
    }

    return nums;
}

console.log('Testcase1');
console.log(selectionSort([1,4,2,8,9,3,6]));

console.log('Testcase2');
console.log(selectionSort([1, 2, 3, 4, 6, 8, 9]));