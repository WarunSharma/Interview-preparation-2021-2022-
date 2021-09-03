
function smallestSumContiguous(arr){
    
    let min=arr[0],currMin=arr[0];


    for(let i=1;i<arr.length;++i){
        currMin+=arr[i];
        currMin=Math.min(currMin,arr[i]);
        min=Math.min(currMin,min);
    }

    return min;
}

console.log('Testcase 1');
console.log(smallestSumContiguous([3, -4, 2, -3, -1, 7, -5]));

console.log('Testcase 2');
console.log(smallestSumContiguous([2, 6, 8, 1, 4]));