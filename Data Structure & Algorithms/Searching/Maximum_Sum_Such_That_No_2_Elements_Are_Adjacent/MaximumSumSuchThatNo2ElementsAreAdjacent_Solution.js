
function maximumSum(i,nums,dp){
    if(i<=-1){
        return 0;
    }
    if(dp[i]!=-1) return dp[i];
    let a1=nums[i]+maximumSum(i-2,nums,dp);
    let a2=maximumSum(i-1,nums,dp);
    return dp[i]=Math.max(a1,a2);
}

console.log('Testcase1');
console.log(maximumSum(5,[5,5,10,100,10,5],new Array(10000).fill(-1)));

console.log('Testcase1');
console.log(maximumSum(2,[1,2,3],new Array(10000).fill(-1)));