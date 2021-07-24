
// function maximumSum(i,nums,dp){
//     if(i<=-1){
//         return 0;
//     }
//     if(dp[i]!=-1) return dp[i];
//     let a1=nums[i]+maximumSum(i-2,nums,dp);
//     let a2=maximumSum(i-1,nums,dp);
//     return dp[i]=Math.max(a1,a2);
// }

function maximumSum(arr,n){
    if(n<=0){
        return 0;
    }
    let a1=arr[n-1]+maximumSum(arr,n-3);
    let a2=maximumSum(arr,n-1);
    //console.log(a1,a2);
    return Math.max(a1,a2);
}

console.log('Testcase1');
console.log(maximumSum([5,5,10,100,10,5],6,new Array(10000).fill(-1)));

console.log('Testcase1');
console.log(maximumSum([1,2,3],3,new Array(10000).fill(-1)));