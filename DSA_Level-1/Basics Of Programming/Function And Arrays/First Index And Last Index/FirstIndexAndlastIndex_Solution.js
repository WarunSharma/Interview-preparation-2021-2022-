
function firstIndex(nums,d){
    let low=0,high=nums.length-1;
    let mid,res=-1;;
    while(low<=high){
        mid=parseInt((low+high)/2);
        if(nums[mid]>d){
            high=mid-1;
        }
        else if(nums[mid]<d){
            low=mid+1;
        }
        else{
            high=mid-1;
            res=mid;
        }
    }

    return res;
}

function lastIndex(nums,d){
    let low=0,high=nums.length-1;
    let mid,res=-1;;
    while(low<=high){
        mid=parseInt((low+high)/2);
        if(nums[mid]>d){
            high=mid-1;
        }
        else if(nums[mid]<d){
            low=mid+1;
        }
        else{
            low=mid+1;
            res=mid;
        }
    }

    return res;
}


function firstAndLastIndex(nums,d){
    let firstIdx=firstIndex(nums,d);
    let lastIdx=lastIndex(nums,d);

    return {firstIdx,lastIdx};
}

console.log(firstAndLastIndex([1,2,3,3,3,3,3,3,4,5,6,7,8,9],3));