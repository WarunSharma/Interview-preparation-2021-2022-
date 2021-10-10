
function palindrom(str,i,j){
    let left=i,right=j-1;
    while(left<right){
        if(str[left]!=str[right]){
            return false;
        }
        ++left;
        --right;
    }
    return true;
}

function getAllSubstrings(str){
    for(let i=0;i<str.length;++i){
        for(let j=i+1;j<=str.length;++j){
            if(palindrom(str,i,j)){
                console.log(str.substring(i,j));
            }
        }
    }
}

getAllSubstrings("abccbc");
