
function subarrays(nums){
    for(let i=0;i<=nums.length-1;++i){
        for(let k=i;k<=nums.length-1;++k){
            for(let j=i;j<=k;++j){
                process.stdout.write(nums[j]+' ');
            }
            console.log();
        }
    }
}

subarrays([1,2,3,4,5]);