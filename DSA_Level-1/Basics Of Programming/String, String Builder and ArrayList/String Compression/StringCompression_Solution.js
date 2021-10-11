
function compression1(str){
    let output="";
    for(let i=0;i<str.length;++i){
        while(i<str.length-1 && str[i]==str[i+1]){
            ++i;
        }
        output+=str[i];
    }
    return output;
}

function compression2(str){
    let output="";
    for(let i=0;i<str.length;++i){
        let count=1;
        while(i<str.length-1 && str[i]==str[i+1]){
            ++i;
            count++;
        }
        output+=str[i];
        if(count>1)
        output+=count;
    }
    return output;
}

function compression(str){
    console.log(compression1(str));
    console.log(compression2(str));
}

compression("abcdeefwqqqqq");