
function maximizeCuts(N,X,Y,Z){
    if(N==0) return 0;
    if(memo[N]!=-1) return memo[N];

    let op1=Number.MIN_SAFE_INTEGER;
    let op2=Number.MIN_SAFE_INTEGER;
    let op3=Number.MIN_SAFE_INTEGER;

    if(N>=X) op1=maximizeCuts(N-X,X,Y,Z);
    if(N>=Y) op2=maximizeCuts(N-Y,X,Y,Z);
    if(N>=Z) op3=maximizeCuts(N-Z,X,Y,Z);

    memo[N]=1+Math.max(op1,op2,op3);

    return memo[N];

}

let memo=new Array(5).fill(-1);
console.log('Testcase 1');
console.log(maximizeCuts(4,2,1,1));

memo=new Array(5).fill(-1);
console.log('Testcase 2');
console.log(maximizeCuts(4,2,1,4));