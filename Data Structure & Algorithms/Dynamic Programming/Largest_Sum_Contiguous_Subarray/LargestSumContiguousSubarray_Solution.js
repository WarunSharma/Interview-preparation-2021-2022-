
function lSCS(arr){
    
    let max=arr[0],currMax=arr[0];

    for(let i=1;i<arr.length;++i){
        currMax=Math.max(arr[i],currMax+arr[i]);
        max=Math.max(currMax,max);

        if(currMax<0){
            currMax=0;
        }

    }

    return max;
}

console.log('Testcase 1');
console.log(lSCS([1,2,3,-2,5]));

console.log('Testcase 2');
console.log(lSCS([-1,-2,-3,-4]));