
function lCS(str1,str2){
    let n=str1.length;
    let m=str2.length;
    let memo=new Array(n+1);
    for(let i=0;i<n+1;++i){
        memo[i]=new Array(m+1).fill(0);
    }

    let max=0;
    for(let i=1;i<n+1;++i){
        for(let j=1;j<m+1;++j){
            if(str1[i-1]==str2[j-1]){
                memo[i][j]=1+memo[i-1][j-1];
            }
            if(memo[i][j]>max){
                max=memo[i][j];
            }
        }
    }

    return max;

}

console.log('Testcase 1');
console.log(lCS("ABCDGH","ACDGHR"));

console.log('Testcase 1');
console.log(lCS("ABC","ACB"));