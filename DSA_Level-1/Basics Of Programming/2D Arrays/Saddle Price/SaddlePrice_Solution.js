
function saddlePrice(nums){
    for(let i=0;i<nums.length;++i){
        let min=nums[i][0];
        let col=0;
        for(let j=0;j<nums[i].length;++j){
            if(min>nums[i][j]){
                min=nums[i][j];
                col=j;
            }
        }

        let k=0;
        while( k<nums.length && nums[k][col]<=min){
            ++k;
        }

        if(k==nums.length){
            return min;
        }

    }

    return "Invalid Input";
}

console.log(saddlePrice([[11,12,13,14],[21,22,23,24],[31,32,33,34],[41,42,43,44]]));