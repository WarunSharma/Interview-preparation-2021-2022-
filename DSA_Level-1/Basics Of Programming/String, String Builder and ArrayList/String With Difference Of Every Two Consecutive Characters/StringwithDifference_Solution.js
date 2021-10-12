
function stringWithDifference(str){
    let res="";
    for(let i=0;i<str.length-1;++i){
        let diff=str.charCodeAt(i+1)-str.charCodeAt(i);
        res+=str[i]+diff;
    }

    res+=str[str.length-1];

    return res;
}

console.log(stringWithDifference("pepCODinG"));