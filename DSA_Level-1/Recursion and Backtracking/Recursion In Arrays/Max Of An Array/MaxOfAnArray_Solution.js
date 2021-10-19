
function maxElement(arr,idx){

    if(idx>=arr.length){
        return Number.MIN_SAFE_INTEGER;
    }

    let max=maxElement(arr,idx+1);
    if(arr[idx]>max){
        return arr[idx];
    }

    return max;

}

console.log(maxElement([2,1,3,4,5],0));