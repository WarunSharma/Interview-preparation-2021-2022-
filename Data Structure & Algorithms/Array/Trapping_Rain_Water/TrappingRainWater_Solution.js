
let trappingRainWater = function(blocks){

    let waterStored=0;

    for(let i=1;i<blocks.length-1;++i){

        let leftMax=blocks[i-1];
        for(let j=i-1;j>=0;--j){
            leftMax=Math.max(blocks[j],leftMax);
        }

        let rightMax=blocks[i+1];
        for(let k=i+1;k<blocks.length;++k){
            rightMax=Math.max(blocks[k],rightMax);
        }

        if(Math.min(leftMax,rightMax)-blocks[i]>0){
            waterStored+=Math.min(leftMax,rightMax)-blocks[i];
        }
    }

    return waterStored;
}

console.log('Testcase1');
console.log(trappingRainWater([4,2,0,3,2,5]));

console.log('Testcase2');
console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));