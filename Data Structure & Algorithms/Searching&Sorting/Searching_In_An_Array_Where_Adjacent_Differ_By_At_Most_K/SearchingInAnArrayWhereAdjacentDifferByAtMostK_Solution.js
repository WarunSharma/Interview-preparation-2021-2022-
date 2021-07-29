
/*
*
* @param nums Given array
* @param k Step difference
* @param x Target element
* @returns index
*
*/

function search(nums,k,x){
    // Traverse the given array starting from
    // leftmost element
    let i=0;
    while(i<nums.length){
        // If x is found at index i
        if(nums[i]==x){
            return i;
        }

        // Jump the difference between current
        // array element and x divided by k
        // We use max here to make sure that i
        // moves at-least one step ahead.
        i=i+ Math.max(1,Math.floor(Math.abs(nums[i]-x)/k));
    }
    return -1;
}

//Testcases
console.log('Testcase1');
console.log(search([4, 5, 6, 7, 6],1,6));

console.log('Testcase2');
console.log(search([20, 40, 50, 70, 70, 60],20,60));