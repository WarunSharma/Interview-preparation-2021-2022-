
function inverse(arr){
    let res=[];
    for(let i=0;i<arr.length;++i){
        res[arr[i]]=i;
    }
    return res;
}

console.log(inverse([4,0,2,3,1]));