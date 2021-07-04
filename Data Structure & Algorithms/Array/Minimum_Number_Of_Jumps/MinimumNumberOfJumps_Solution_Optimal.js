

/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let minimumNumber=function(nums){
    let maxReach=0,jumps=0,curReach=0;

    if(nums.length==1){
        return 0;
    }
    else if(nums[0]==0){
        return -1;
    }
    else{
        for(let i=0;i<nums.length-1;++i){
            if(nums[i]+1>maxReach){
                maxReach=nums[i]+i;
            }

            if(i==curReach){
                ++jumps;
                curReach=maxReach
            }
        }
    }

    if(curReach>=nums.length-1){
        return jumps;
    }
    else{
        return -1;
    }

}

console.log('Testcase1');
console.log(minimumNumber([1,2,3,4,5,6]));

console.log('Testcase2');
console.log(minimumNumber([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));

console.log('Testcase3');
console.log(minimumNumber([1, 4, 3, 2, 6, 7]));