
function lRS(str){
    let memo=new Array(str.length+1);

    for(let i=0;i<str.length+1;++i){
        memo[i]=new Array(str.length+1).fill(0);
    }

    for(let i=1;i<str.length+1;++i){
        for(let j=1;j<str.length+1;++j){
            if(str[i-1]==str[j-1] && i!=j){
                memo[i][j]=1+memo[i-1][j-1];
            }
            else{
                memo[i][j]=Math.max(memo[i][j-1],memo[i-1][j]);
            }
        }
    }

    return memo[str.length][str.length];
}

console.log('Testcase 1');
console.log(lRS('AABEBCDD'));