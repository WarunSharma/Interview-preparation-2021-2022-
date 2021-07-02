
/*
* Time Complexity: O(n2)
* Space Complexity: O(n)
*/

let minimumNumber=function(nums){
    let n=nums.length;
    let dp=new Array(n).fill(Number.MAX_SAFE_INTEGER);
    dp[0]=0;

    for(let i=1;i<n;++i){
        for(let j=0;j<i;++j){
            if(dp[j]!=Number.MAX_SAFE_INTEGER && nums[j]+j>=i){
                if(dp[i]>dp[j]+1){
                    dp[i]=dp[j]+1;
                }
            }
        }
    }

    if(dp[n-1]!=Number.MAX_SAFE_INTEGER){
        return dp[n-1];
    }
    else{
        return -1;
    }

}

console.log('Testcase1');
console.log(minimumNumber([1,2,3,4,5,6]));

console.log('Testcase2');
console.log(minimumNumber([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));

console.log('Testcase3');
console.log(minimumNumber([1, 4, 3, 2, 6, 7]));