
function cPS(str){
    let n=str.length;
    let memo=new Array(n);

    for(let i=0;i<n;++i){
        memo[i]=new Array(n).fill(0);
    }

    let count=0;

    for(let gap=0;gap<n;++gap){
        for(let i=0,j=gap;j<n;++i,++j){
            if(gap==0){
                memo[i][j]=1;
            }
            else if(gap==1){
                if(str[i]==str[j]){
                    memo[i][j]=3;
                }
                else{
                    memo[i][j]=2;
                }
            }
            else{
                if(str[i]==str[j]){
                    memo[i][j]=memo[i][j-1]+memo[i+1][j]+1;
                }
                else{
                    memo[i][j]=memo[i][j-1]+memo[i+1][j]-memo[i+1][j-1];
                }
            }
        }
    }

    return memo[0][n-1];
}

console.log('Testcase 1');
console.log(cPS("aab"));

console.log('Testcase 2');
console.log(cPS("abcd"));

console.log('Testcase 3');
console.log(cPS("aaaaaaaaaaaaaaaaaaaaa"));