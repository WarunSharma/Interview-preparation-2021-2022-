
function lCS(str1,str2,m,n){
    let memo=new Array(m+1);
    for(let i=0;i<m+1;++i){
        memo[i]=new Array(n+1).fill(0);
    }

    for(let i=1;i<m+1;++i){
        for(let j=1;j<n+1;++j){
            if(str1[i-1]==str2[j-1]){
                memo[i][j]=1+memo[i-1][j-1];
            }
            else{
                memo[i][j]=Math.max(memo[i-1][j],memo[i][j-1]);
            }
        }
    }

    return memo[m][n];
}

console.log('Testcase 1');
console.log(lCS('ABCDGH','AEDFHR',6,6));

console.log('Testcase 2');
console.log(lCS('BCDAACD','ACDBAC',7,6));