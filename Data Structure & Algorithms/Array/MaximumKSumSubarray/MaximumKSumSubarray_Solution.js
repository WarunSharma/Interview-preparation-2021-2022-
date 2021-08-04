
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param nums Given array
* @param k Given size
* @returns sum Resultant sum
*
*/

let maximumKSumSubarray = function(nums,k){

    //Returns if array length is less than subaaray size
    if(k>nums.length){
        return 'Invalid'
    }
    let sum=0;

    //Sum of first K elements
    for(let i=0;i<k;++i){
        sum+=nums[i];
    }

    let curSum=sum;

    //Removing (i-k)th element from curSum and add current elements 
    for(let i=k;i<nums.length;++i){
        curSum=curSum-nums[i-k]+nums[i];
        sum=Math.max(sum,curSum);
    }

    return sum;
}

//Testcases
console.log('Testcase1');
console.log(maximumKSumSubarray([100, 200, 300, 400],2));

console.log('Testcase2');
console.log(maximumKSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20],4))

console.log('Testcase3');
console.log(maximumKSumSubarray([2, 3],3));