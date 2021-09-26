
function findElement(arr,d){
    let idx=-1;
    for(let i=0;i<arr.length;++i){
        if(d==arr[i]){
            idx=i;
            break;
        }
    }  
    
    return idx;
}

console.log(findElement([15,30,40,4,11,9],40));