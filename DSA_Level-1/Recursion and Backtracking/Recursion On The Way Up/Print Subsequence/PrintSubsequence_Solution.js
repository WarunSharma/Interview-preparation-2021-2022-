
function printSubsequence(str,ans){

    if(str.length==0){
        console.log(ans);
        return;
    }

    let ch=str[0];
    let subStr=str.substring(1);

    printSubsequence(subStr,ans+ch);
    printSubsequence(subStr,ans+"");
}

printSubsequence("yuta","");