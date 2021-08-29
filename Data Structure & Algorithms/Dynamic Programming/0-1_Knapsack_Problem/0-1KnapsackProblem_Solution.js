
function knapsack(N,W,v,w){
    if(N==0 || W==0){
        return 0;
    }
    if(W<w[N-1]){
        return knapsack(N-1,W,v,w);
    }
    return Math.max(knapsack(N-1,W,v,w),v[N-1]+knapsack(N-1,W-w[N-1],v,w))
}

console.log('Testcase 1');
console.log(knapsack(3,4,[1,2,3],[4,5,1]));

console.log('Testcase 2');
console.log(knapsack(3,3,[1,2,3],[4,5,6]));