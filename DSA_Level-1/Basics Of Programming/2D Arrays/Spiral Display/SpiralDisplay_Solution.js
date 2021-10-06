
function print(nums){
    let minRow=0,maxRow=nums.length-1;
    let minCol=0,maxCol=nums[0].length-1;

    let count=0, printCount=nums.length*nums[0].length;

    while(count<printCount){
        
        if(count<printCount){
            for(let i=minRow;i<=maxRow;++i){
                console.log(nums[i][minCol]);
                ++count;
            }
        }

        minCol++;

        if(count<printCount){
            for(let i=minCol;i<=maxCol;++i){
                console.log(nums[maxRow][i]);
                ++count;
            }
        }

        maxRow--;

        if(count<printCount){
            for(let i=maxRow;i>=minRow;--i){
                console.log(nums[i][maxCol]);
                ++count;
            }
    
        }

        maxCol--;

        if(count<printCount){
            for(let i=maxCol;i>=minCol;--i){
                console.log(nums[minRow][i]);
                ++count;
            }
        }

        minRow++;

    }
}

print([[1,2,3],[1,3,4],[1,2,5]]);