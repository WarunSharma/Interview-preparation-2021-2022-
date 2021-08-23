let count=0;
function coinChange(coins,n,m){
    if(n==0){
        return 1;
    }
    if(m<=0 || n<0){
        return 0;
    }
        
    return coinChange(coins,n-coins[m-1],m) + coinChange(coins,n,m-1);
}

console.log('Testcase 1');
console.log(coinChange([2,5,3,6],10,4));

console.log('Testcase 2');
console.log(coinChange([1,2,3],5,3));

