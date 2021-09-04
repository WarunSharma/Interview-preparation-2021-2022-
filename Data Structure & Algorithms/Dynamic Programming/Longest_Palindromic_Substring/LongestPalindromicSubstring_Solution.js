
function lPS(str){
    let n=str.length;
    let memo=new Array(n);

    for(let i=0;i<n;++i){
        memo[i]=new Array(n).fill(0);
    }

    let max=1;
    for(let gap=0;gap<n;++gap){
        for(let i=0,j=gap;j<n;++i,++j){
            if(gap==0){
                memo[i][j]=1;
            }
            else if(gap==1){
                if(str[i]===str[j]){
                    memo[i][j]=1;
                }
                else{
                    memo[i][j]=0;
                }
            }
            else{
                if(str[i]==str[j]){
                    memo[i][j]=memo[i+1][j-1];
                }
                else{
                    memo[i][j]=0;
                }
            }

            if(memo[i][j]){
                max=gap+1;
            }
        }
    }

    return max;

}

console.log('Testcase 1');
console.log(lPS("babad"));

console.log('Testcase 2');
console.log(lPS("cbbd"));