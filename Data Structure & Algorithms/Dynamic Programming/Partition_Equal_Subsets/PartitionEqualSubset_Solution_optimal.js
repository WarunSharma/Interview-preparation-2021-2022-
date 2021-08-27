
function partitionSubset(arr,sum,N,dp){
    if(N==0){
        return false;
    }

    if(sum==0){
        return true;
    }

    if(dp[sum][N-1]!=-1){
        return dp[sum][N-1];
    }

    if(arr[N-1]>sum){
        return partitionSubset(arr,sum,N-1,dp);
    }

    return dp[sum][N-1]=partitionSubset(arr,sum,N-1,dp) || partitionSubset(arr,sum-arr[N-1],N-1,dp);
}

function partition(arr){
    let sum=arr.reduce((ele,acc)=>acc+ele);
    if(sum%2!=0){
        return false;
    }
    else{
        let dp=new Array(sum+1);
        for(let i=0;i<sum+1;++i){
            dp[i]=new Array(arr.length+1).fill(-1);
        }
        return partitionSubset(arr,sum/2,arr.length,dp);
    }
}

console.log('Testcase 1')
console.log(partition([1,2,6,3]));

console.log('Testcase 2')
console.log(partition([1, 3, 5]));

console.log('Testcase 3')
console.log(partition([1, 5, 11, 5]));