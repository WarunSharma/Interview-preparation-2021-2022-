
function coinChange(coins,n,m){
    let memo=new Array(n+1).fill(0);
    memo[0]=1;

    for(let coin of coins){
        for(let i=coin;i<n+1;++i){
                memo[i]+=memo[i-coin];
        }
    }

    return memo[n];
}

console.log('Testcase 1');
console.log(coinChange([2,5,3,6],10,4));

console.log('Testcase 2');
console.log(coinChange([1,2,3],4,3));

