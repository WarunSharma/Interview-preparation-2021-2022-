
let rightRotation = function(nums,k){
    let l=nums.length;
    k%=l;
    while(k--){
        let end=nums[l-1];
        for(let j=l-2;j>=0;--j){
            nums[j+1]=nums[j];
        }
        nums[0]=end;
    }

    return nums;
}

console.log('Testcase1')
console.log(rightRotation([1,2,3,4,5],1))

console.log('Testcase2')
console.log(rightRotation([1,2,3,4,5],3))