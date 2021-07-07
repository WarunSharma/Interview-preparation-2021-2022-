
let nextPermutation=function(nums){
    let idx1,idx2;
    if(nums.length==1){
        return nums;
    }
    else{
        for(let i=nums.length-2;i>=0;--i){
            if(nums[i]<nums[i+1]){
                idx1=i;
                break;
            }
        }
    
        for(let i=nums.length-1;i>=0;--i){
            if(nums[idx1]<nums[i]){
                idx2=i;
                break;
            }
        }
    
        if(idx1!=undefined && idx2!=undefined){
            let temp=nums[idx1];
            nums[idx1]=nums[idx2];
            nums[idx2]=temp;
        
            let i=idx1+1,j=nums.length-1;
        
            while(i<j){
                temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
                ++i;
                --j;
            }
        }
        else{
            let i=0,j=nums.length-1;
        
            while(i<j){
                temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
                ++i;
                --j;
        }
    }

    return nums;
}
}


console.log('Testcase1');
console.log(nextPermutation([3,2,1]));

console.log('Testcase2');
console.log(nextPermutation([1,3,2]));

console.log('Testcase3');
console.log(nextPermutation([1,3,5,4,2]));

console.log('Testcase4');
console.log(nextPermutation([1,4]));

