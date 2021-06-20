
let secondSmallest = function(nums){
    //Return empty object if array length is less than 2
    if(nums.length<2){
        return {};
    }

    //Define smallest and second smallest
    let smallest,secondSmallest;

    //Initializing the smallest and second smallest
    if(nums[0]>nums[1]){
        smallest=nums[1];
        secondSmallest=nums[0]
    }
    else{
        smallest=nums[0];
        secondSmallest=nums[1]
    }

    //Iterating on array
    for(let i=2;i<nums.length;++i){

        //If num > than secondSmallest then skip
        if(nums[i]>secondSmallest){
            continue;
        }

        //If smallest<num<secondSmallest
        if(nums[i]>smallest && nums[i]<secondSmallest){
            secondSmallest=nums[i];
        }

        //If smallest>num
        if(nums[i]<smallest){
            secondSmallest=smallest;
            smallest=nums[i];
        }
    }

    return {
        smallest,
        secondSmallest
    }

}

console.log('Testcase1')
console.log(secondSmallest([12, 13, 1, 10, 34, 1]));