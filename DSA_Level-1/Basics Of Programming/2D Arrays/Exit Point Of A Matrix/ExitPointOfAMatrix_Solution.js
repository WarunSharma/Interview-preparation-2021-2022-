
function exitPoint(nums) {
    let i = 0, j = 0;
    let dir = 0; //0 means east direction, 1 means south direction, 2 means west direction, 3 means north direction

    let n=nums.length;
    let m=nums[0].length;
    while(true){
        dir=(dir+nums[i][j])%4;
        
        if(dir==0){
            ++j;
        }
        else if(dir==1){
            ++i;
        }
        else if(dir==2){
            --j;
        }
        else{
            --i;
        }
        
        
        if(i<0){
            ++i;
            break;
        }
        if(j<0){
            ++j;
            break;
        }
        if(i==n){
            --i;
            break;
        }
        if(j==m){
            --j;
            break;
        }
    }

    console.log(i,j);
}

exitPoint([[0,0,1,0],
    [1,0,0,0],
    [0,0,0,0], 
    [1,0,1,0]])