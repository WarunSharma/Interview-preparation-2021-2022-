
function print(nums){
    let rows=nums.length;
    let cols=nums[0].length;

    for(let j=0;j<cols;++j){
        if(j%2==0){
            for(let i=0;i<rows;++i){
                console.log(nums[i][j]);
            }
        }
        else{
            for(let i=rows-1;i>=0;--i){
                console.log(nums[i][j]);
            }
        }
    }
    
}

print([[1,2,3],[4,5,6],[7,8,9]]);