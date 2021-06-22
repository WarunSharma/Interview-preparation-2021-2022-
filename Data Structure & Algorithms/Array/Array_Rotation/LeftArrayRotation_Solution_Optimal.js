
let leftRotation = function(nums,k){
    let l=nums.length;
    k%=l;
    
    let temp;

    //Reverse first K elements
    for(let i=0,j=k-1;i<j;--j,++i){
        temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    }

    //Reverse next half
    for(let i=k,j=l-1;i<j;--j,++i){
        temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    }

    //Reverse whole array
    for(let i=0,j=l-1;i<j;--j,++i){
        temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    }
    return nums;
}

console.log('Testcase1')
console.log(leftRotation([1,2,3,4,5],1))

console.log('Testcase2')
console.log(leftRotation([1,2,3,4,5],3))