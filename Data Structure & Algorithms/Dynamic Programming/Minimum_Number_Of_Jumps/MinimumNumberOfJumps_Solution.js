
function minimumJumps(arr){
    let n=arr.length;
    
    if(n<=1){
        return 0;
    }

    if(arr[0]==0){
        return -1;
    }

    let memo=new Array(n).fill(Number.MAX_SAFE_INTEGER);
    memo[0]=0;
    for(let i=1;i<n;++i){
        for(let j=i-1;j>=0;--j){
            if(arr[j]+j>=i && memo[i]>memo[j]+1){
                memo[i]=memo[j]+1;
            }
        }
    }

    return memo[n-1]==0?-1:memo[n-1];
}

console.log('Testcase 1');
console.log(minimumJumps([1, 4, 3, 2, 6, 7]));

console.log('Testcase 2');
console.log(minimumJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
