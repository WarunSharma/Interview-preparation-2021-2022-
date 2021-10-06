
function rotateBy90Deg(nums){
    //Transpose

    for(let i=0;i<nums.length;++i){
        for(let j=i;j<nums[i].length;++j){
            let temp=nums[i][j];
            nums[i][j]=nums[j][i];
            nums[j][i]=temp;
        }
    }


    //Reverse

    for(let i=0;i<nums.length;++i){
        let left=0,right=nums[i].length-1;
        while(left<right){
            let temp=nums[i][left];
            nums[i][left]=nums[i][right];
            nums[i][right]=temp;
            ++left;
            --right;
        }
    }    

    console.log(nums);
}

rotateBy90Deg([[1,2,3],[4,5,6],[7,8,9]]);