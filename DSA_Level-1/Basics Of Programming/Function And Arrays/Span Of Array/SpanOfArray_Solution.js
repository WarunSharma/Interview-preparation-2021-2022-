
function difference(arr){
    let n=arr.length;  
    
    let max,min;
    if(arr[0]>arr[1]){
        max=arr[0];
        min=arr[1];
    }
    else{
        max=arr[1];
        min=arr[0];
    }
    
    for(let i=2;i<arr.length;++i){
        if(arr[i]>max){
            max=arr[i];
        }
        
        if(arr[i]<min){
            min=arr[i];
        }
    }
    
    return max-min;
}

console.log(difference([15,30,40,4,11,9]));
