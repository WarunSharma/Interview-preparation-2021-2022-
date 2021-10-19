
function allIndexes(arr,x,idx,fsf){

    if(idx==arr.length){
        return new Array(fsf);
    }

    let res;
    if(arr[idx]==x){
        res=allIndexes(arr,x,idx+1,fsf+1);
        res[fsf]=idx;
    }
    else{
        res=allIndexes(arr,x,idx+1,fsf);
    }

    return res;
}

console.log(allIndexes([2,3,4,5,3,6,7,3,8,3],3,0,0));