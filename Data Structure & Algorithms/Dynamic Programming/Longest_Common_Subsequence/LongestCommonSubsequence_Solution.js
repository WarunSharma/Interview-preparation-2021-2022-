
function lCS(str1,str2,m,n){
    if(m==0 || n==0){
        return 0;
    }

    if(str1[m-1]==str2[n-1]){
        return 1 + lCS(str1,str2,m-1,n-1);
    }

    return Math.max(lCS(str1,str2,m-1,n),lCS(str1,str2,m,n-1));
}

console.log('Testcase 1');
console.log(lCS('ABCDGH','AEDFHR',6,6));