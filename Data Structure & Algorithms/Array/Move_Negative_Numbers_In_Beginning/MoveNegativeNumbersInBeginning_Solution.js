
let moveNegativeNumbersBeginning=function(nums){
    
    let low=0;
    let temp;

    for(let i=0;i<nums.length;++i){
        if(nums[i]<0){
            temp=nums[i];
            nums[i]=nums[low];
            nums[low]=temp;
            ++low;
        }
    }

    return nums;

}

console.log('Testcase1');
console.log(moveNegativeNumbersBeginning([-12, 11, -13, -5, 6, -7, 5, -3, -6]))