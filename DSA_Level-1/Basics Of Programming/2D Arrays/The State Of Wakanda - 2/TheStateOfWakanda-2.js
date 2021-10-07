
function diagonalDisplay(nums){
    for(let j=0;j<nums.length;++j){
        for(let i=0;i<nums.length-j;++i){
            console.log(nums[i][i+j]+" ");
        }
    }
}

diagonalDisplay([[11,12,13,14],[21,22,23,24],[31,32,33,34],[41,42,43,44]]);