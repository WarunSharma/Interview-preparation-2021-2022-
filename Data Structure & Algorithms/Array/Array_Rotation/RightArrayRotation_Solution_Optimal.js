
let rightRotation = function(nums,k){

    let l=nums.length;
    //If k>l, mod unnecessary rotations
    k=k%l;

    let temp;

    //Reverse first length-k elements
    for(let i=0,j=l-k-1;i<j;--j,++i){
        temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    }

    //Reverse other half
    for(let i=l-k,j=l-1;i<j;--j,++i){
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
console.log(rightRotation([1,2,3,4,5],1))

console.log('Testcase2')
console.log(rightRotation([1,2,3,4,5],3))