
function printPermutation(str,psf){

    if(str.length==0){
        console.log(psf);
        return;
    }

    for(let i=0;i<str.length;++i){
        let ch=str[i];
        let leftSubstr=str.substring(0,i);
        let rightSubstr=str.substring(i+1);

        printPermutation(leftSubstr+rightSubstr,psf+ch);
    }
}

printPermutation("abc","")