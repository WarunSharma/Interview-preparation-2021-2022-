
/*
*
* Time Complexity: O(n)
* Space Complexity: O(n)
*
* @param blocks Given array of block size
* @returns waterStored Maximum resultant water stored
* 
*/

let trappingRainWater = function(blocks){

    let waterStored=0;

    //blocks length less than 3. No place to store water
    if(blocks.length<3){
        return waterStored;
    }

    //Define leftMax, rightMax array to store maximum element so far
    let leftMax=[],rightMax=[];

    leftMax[0]=blocks[0], rightMax[blocks.length-1]=blocks[blocks.length-1];
    
    //Storing max elements on respective indexes in LeftMax
    for(let i=1;i<blocks.length;++i){
        leftMax[i]=Math.max(leftMax[i-1],blocks[i]);
    }

    //Storing max elements on respective indexes in RightMax
    for(let i=blocks.length-2;i>=0;--i){
        rightMax[i]=Math.max(rightMax[i+1],blocks[i]);
    }
    

    //Iterating blocks between 1st and last
    for(let i=1;i<blocks.length-1;++i){

        //Calculate minimum of leftmax, rightmax and subtract ith element from blocks
        if(Math.min(leftMax[i-1],rightMax[i+1])-blocks[i]>0){
            waterStored+=Math.min(leftMax[i-1],rightMax[i+1])-blocks[i];
        }
    }

    return waterStored;
}

//Testcases
console.log('Testcase1');
console.log(trappingRainWater([4,2,0,3,2,5]));

console.log('Testcase2');
console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));