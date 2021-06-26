
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let kedaneMaxSubarraySum = function(nums){
    
    let maxSum=0,curSum=0;
    for(let i=0;i<nums.length;++i){
        curSum+=nums[i];
        if(curSum<0){
            curSum=0;
        }

        maxSum=Math.max(curSum,maxSum);
    }
    return maxSum;
}

let maxCircularSubarraySum = function(nums){
    
    let maxSum=kedaneMaxSubarraySum(nums);
    let negNums=nums.map(el=>-1*el);
    let minSum=-1*kedaneMaxSubarraySum(negNums);
    let totalSum=nums.reduce((acc,el)=>acc+el)
    return Math.max(maxSum,(totalSum-minSum));

}

console.log('Testcase1');
console.log(maxCircularSubarraySum([10,-3,-4,7,6,5,-4,-1]));

console.log('Testcase2');
console.log(maxCircularSubarraySum([8,-8,9,-9,10,-11,12]));
