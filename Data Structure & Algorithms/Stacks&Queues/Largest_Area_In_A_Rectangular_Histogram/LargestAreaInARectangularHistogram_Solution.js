
function largestArea(arr){
    let minHeight=0;
    let maxArea=0;

    for(let i=0;i<arr.length;++i){
        minHeight=arr[i];
        maxArea=Math.max(maxArea,arr[i]);

        for(let j=i;j>=0;--j){
            minHeight=Math.min(minHeight,arr[j]);
            let width=i-j+1;
            maxArea=Math.max(maxArea,minHeight*width);
        }
    }

    return maxArea;
}

console.log('Testcase 1');
console.log(largestArea([7,2,8,9,1,3,6,5]));