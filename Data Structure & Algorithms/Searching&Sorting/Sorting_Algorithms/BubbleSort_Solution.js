
/*
https://www.geeksforgeeks.org/bubble-sort/

Bubble Sort
Difficulty Level : Easy
Last Updated : 28 Jun, 2021
 
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
Example: 
First Pass: 
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
Second Pass: 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.
Third Pass: 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
*/

/*
*
* @param nums Given array
* @returns nums Sorted array
*
*/
function bubbleSort(nums) {
    let temp, swap;
    //ith iteration
    for (let i = 0; i < nums.length - 1; ++i) {
        swap = false;
        for (let j = i; j < nums.length - i; ++j) {
            //Check adjacent elements 
            if (nums[j] > nums[j + 1]) {
                //Swap elements
                swap = true;
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
        //swap denotes elements in that iteration required swapping or not
        if (!swap) {
            break;
        }
    }
    return nums;
}

//Testcases
console.log('Testcase1');
console.log(bubbleSort([1, 4, 2, 8, 9, 3, 6]));

console.log('Testcase2');
console.log(bubbleSort([1, 2, 3, 4, 6, 8, 9]));