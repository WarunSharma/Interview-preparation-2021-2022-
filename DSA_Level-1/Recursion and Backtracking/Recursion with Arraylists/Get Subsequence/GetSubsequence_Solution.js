
function getSubsequence(str){

    if(str.length==0){
        let res=new Array();
        res.push("");
        return res;
    }

    let ch=str[0];
    let subStr=str.substring(1);

    let thatRes=getSubsequence(subStr);
    let thisRes=new Array();

    for(let s of thatRes){
        thisRes.push(""+s);
    }

    for(let s of thatRes){
        thisRes.push(ch+s);
    }

    return thisRes;
}

console.log(getSubsequence("abc"));