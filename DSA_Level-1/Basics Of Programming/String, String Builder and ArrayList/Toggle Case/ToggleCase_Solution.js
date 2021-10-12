
function toggleCase(str){
    let output="";
    for(let i=0;i<str.length;++i){
        let chValue=str.charCodeAt(i);
        let temp=""+str[i];
        if(chValue>=97 && chValue<=122){
            output+=temp.toUpperCase();
        }
        else{
            output+=temp.toLowerCase();
        }
    }

    return output;
}

console.log(toggleCase("pepCODinG"));