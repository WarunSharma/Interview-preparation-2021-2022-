
function editDistance(str1,str2,m,n){

    if(m==0){
        return n;
    }

    if(n==0){
        return m;
    }

    if(str1[m-1]==str2[n-1]){
        return editDistance(str1,str2,m-1,n-1);
    }

    return 1 + Math.min(editDistance(str1,str2,m-1,n-1), //Replace
        editDistance(str1,str2,m-1,n), //Delete
        editDistance(str1,str2,m,n-1) //Insert
    )
}

console.log('Testcase 1');
console.log(editDistance("geek","gesek",4,5));

console.log('Testcase 2');
console.log(editDistance("gfg","gfg",3,3));

console.log('Testcase 3');
console.log(editDistance("sunday","saturday",6,8));