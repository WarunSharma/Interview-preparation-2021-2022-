
let equilibriumPoint = function(nums){
    let prefixSum=0, sum=0, suffixSum=0;

    sum=nums.reduce((acc,ele)=> {
       return acc+ele;
    });

    for(let i=0;i<nums.length;++i){
        suffixSum=sum-prefixSum-nums[i];

        if(prefixSum==suffixSum){
            return i;
        }

        prefixSum+=nums[i];
    }
    
    return -1;
}

console.log('Testcase1');
console.log(equilibriumPoint([1,3,5,2,2]));

console.log('Testcase2');
console.log(equilibriumPoint([1]));

console.log('Testcase3');
console.log(equilibriumPoint([1,2]))