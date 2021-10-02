
function ceilAndFloor(nums,d){
    let low=0,high=nums.length-1;
    let mid,floor=Number.MIN_SAFE_INTEGER,ceil=Number.MAX_SAFE_INTEGER;
    
    while(low<=high){
        mid=parseInt((low+high)/2);
        if(nums[mid]<d){
            low=mid+1;
            floor=nums[mid];
        }
        else if(nums[mid]>d){
            high=mid-1;
            ceil=nums[mid];
        }
        else{
            floor=nums[mid];
            ceil=nums[mid];
        }
    }
    
    console.log(ceil);
    console.log(floor);
}

ceilAndFloor([1,5,10,15,22,33,40,42,55,66],34);