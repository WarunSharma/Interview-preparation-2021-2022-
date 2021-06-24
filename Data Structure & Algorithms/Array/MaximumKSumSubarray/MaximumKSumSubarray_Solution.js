
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
*/


let maximumKSumSubarray = function(nums,k){

    if(k>nums.length){
        return 'Invalid'
    }
    let sum=0;
    for(let i=0;i<k;++i){
        sum+=nums[i];
    }

    let curSum=sum;
    for(let i=k;i<nums.length;++i){
        curSum=curSum-nums[i-k]+nums[i];
        if(curSum>sum){
            sum=curSum;
        }
    }

    return sum;
}

console.log('Testcase1');
console.log(maximumKSumSubarray([100, 200, 300, 400],2));

console.log('Testcase2');
console.log(maximumKSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20],4))

console.log('Testcase3');
console.log(maximumKSumSubarray([2, 3],3));