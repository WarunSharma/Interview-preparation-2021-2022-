
let rearrangeArray=function(nums){
    let i=0;j=nums.length-1;
    let temp;
    while(i<=j){
        if(nums[i]<0 && nums[j]>=0){
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            ++i;
            --j;
        }
        else{
            if(nums[i]>=0){
                ++i;
            }
            if(nums[j]<0){
                --j;
            }
        }
        
    }

    let k=0;

    while(i<nums.length){
        temp=nums[i];
        nums[i]=nums[k];
        nums[k]=temp;
        ++i;
        k=k+2;
    }
    return nums;
}

console.log('Testcase1')
console.log(rearrangeArray([1, 2, 3, -4, -1, 4]))

console.log('Testcase2')
console.log(rearrangeArray([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]))

console.log('Testcase3')
console.log(rearrangeArray([1, 2, 3]))

console.log('Testcase4')
console.log(rearrangeArray([-4, -1, -9, -5]))