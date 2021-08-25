
function maximizeCuts(N,X,Y,Z){
    if(N<=0){
        return 0;
    }

    return 1 + Math.min(maximizeCuts(N-X,X,Y,Z),
    maximizeCuts(N-Y,X,Y,Z),
    maximizeCuts(N-Z,X,Y,Z));
}

console.log('Testcase 1');
console.log(maximizeCuts(4,2,1,1));

console.log('Testcase 2');
console.log(maximizeCuts(4,2,1,4));