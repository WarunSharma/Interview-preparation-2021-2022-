
function lIS(arr){
    let memo=new Array(arr.length).fill(0);
    memo[0]=1;
    for(let i=1;i<arr.length;++i){
        memo[i]=1;
        for(let j=i;j>=0;--j){
            if(arr[i]>arr[j] && memo[j]+1>memo[i]){
                memo[i]=memo[j]+1;
            }
        }
    }

    let max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<memo.length;++i){
        if(max<memo[i]){
            max=memo[i];
        }
    }

    return max;
}

console.log('Testcase 1');
console.log(lIS([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]));

console.log('Testcase 2');
console.log(lIS([5,8,3,7,9,1]));