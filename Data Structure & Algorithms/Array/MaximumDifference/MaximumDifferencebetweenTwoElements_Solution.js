
let maximumDifference = function(nums){
    let maxDiff=nums[1]-nums[0];
    let min=nums[0];

    for(let i=2;i<nums.length;++i){
        if(nums[i]>min){
            maxDiff=Math.max(nums[i]-min,maxDiff);
        }
        else{
            min=nums[i];
        }
    }

    return maxDiff;
}

console.log('Testcase1');
console.log(maximumDifference([2, 3, 10, 6, 4, 8, 1]));

console.log('Testcase2');
console.log(maximumDifference([7, 9, 5, 6, 3, 2]));