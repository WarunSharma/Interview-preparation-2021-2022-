
function editDistance(str1,str2,m,n){
    let memo=new Array(m+1);

    for(let i=0;i<m+1;++i){
        memo[i]=new Array(n+1);
    }

    for(let i=0;i<m+1;++i){
        for(let j=0;j<n+1;++j){
            if(i==0){
                memo[i][j]=j;
            }

            else if(j==0){
                memo[i][j]=i;
            }

            else if(str1[i]==str2[j]){
                memo[i][j]=memo[i-1][j-1];
            }
            else{
                memo[i][j]=1+Math.min(memo[i-1][j-1],memo[i][j-1],memo[i-1][j]);
            }
        }
    }

    return memo[m][n];
}

console.log('Testcase 1');
console.log(editDistance("geek","gesek",4,5));

console.log('Testcase 2');
console.log(editDistance("gfg","gfg",3,3));

console.log('Testcase 3');
console.log(editDistance("sunday","saturday",6,8));