

//Time Complexity: O(n), Space Complexity: O(1)

let trappingRainWater = function(blocks){

    let waterStored=0;

    //blocks length less than 3. No place to store water
    if(blocks.length<3){
        return waterStored;
    }

    //Define left and right pointer
    let left=0,right=blocks.length-1;
    let leftMax=0,rightMax=0;

    while(left<=right){
        if(blocks[left]<=blocks[right]){
            waterStored+=Math.max(0,leftMax-blocks[left]);
            leftMax=Math.max(leftMax,blocks[left]);
            ++left;
        }
        else{
            waterStored+=Math.max(0,rightMax-blocks[right]);
            rightMax=Math.max(rightMax,blocks[right]);
            --right;
        }
    }

    return waterStored;
}

console.log('Testcase1');
console.log(trappingRainWater([4,2,0,3,2,5]));

console.log('Testcase2');
console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));