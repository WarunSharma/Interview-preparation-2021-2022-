
function knapsack(N,W,v,w){
    let memo=new Array(W+1);
    for(let i=0;i<W+1;++i){
        memo[i]=new Array(N+1).fill(0);
    }

    for(let i=1;i<W+1;++i){
        for(let j=1;j<N+1;++j){
            if(j>w[i]){
                if(v[i]+memo[i-1][j-w[i]]>memo[i-1][j]){
                    memo[i][j]=v[i]+memo[i-1][j-w[i]]
                }
                else{
                    memo[i][j]=memo[i-1][j];
                }
            }
            else{
                memo[i][j]=memo[i-1][j];
            }
        }
    }

    return memo[W][N];
}

console.log('Testcase 1');
console.log(knapsack(3,4,[1,2,3],[4,5,1]));

console.log('Testcase 2');
console.log(knapsack(3,3,[1,2,3],[4,5,6]));