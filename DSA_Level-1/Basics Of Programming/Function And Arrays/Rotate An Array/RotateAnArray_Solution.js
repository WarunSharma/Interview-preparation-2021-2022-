
function reverse(arr,i,j){
    while(i<j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        ++i;
        --j;
    }
}

function rotate(arr,k){
    k=k%arr.length;
    if(k<0){
        k=k+arr.length;
    }

    reverse(arr,0,arr.length-k-1);
    reverse(arr,arr.length-k,arr.length-1);
    reverse(arr,0,arr.length-1);

    return arr;
}

console.log(rotate([1,2,3,4,5],-3));
