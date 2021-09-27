
function barChartRepresentation(nums){
    
    let max=nums[0];

    for(let i=0;i<nums.length;++i){
        if(nums[i]>max){
            max=nums[i];
        }
    }

    while(max){
        for(let j=0;j<nums.length;++j){
            if(nums[j]>=max){
                process.stdout.write('*\t');
            }
            else{
                process.stdout.write('\t');
            }
        }
        console.log();
        --max;
    }

}

barChartRepresentation([3,1,0,7,5]);