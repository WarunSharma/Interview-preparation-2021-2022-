
function findMissingAndRepeating(nums){
    let res=[];
    for(let i=0;i<nums.length;++i){
        if(nums[i]<0 && Math.abs(nums[i])==i+1){
            res.push(Math.abs(nums[i]));
        }
        else{
            nums[Math.abs(nums[i])-1]=-1*nums[i];
        }
    }

    for(let i=0;i<nums.length;++i){
        if(nums[i]>0){
            res.push(i+1);
        }
    }

    return res;
}

console.log('Testcase1');
console.log(findMissingAndRepeating([1, 3, 3]));

console.log('Testcase2');
console.log(findMissingAndRepeating([2,2]));