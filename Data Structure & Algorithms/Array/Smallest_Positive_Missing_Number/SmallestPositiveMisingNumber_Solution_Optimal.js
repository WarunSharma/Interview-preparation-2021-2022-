

/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let smallestPostiveNumber = function(nums){
    
    let l=nums.length;
    let temp;
    for(let i=0;i<l;){
        if(nums[i]>l || nums[i]<=0 || nums[i]==i+1){
            i++;
        }
        else{
            if(nums[nums[i]-1]==nums[i]){
                ++i;
            }
            else{
                temp=nums[nums[i]-1];
                nums[nums[i]-1]=nums[i];
                nums[i]=temp;
            }
        }
    }

    for(let i=0;i<l;++i){
        if(nums[i]!=i+1){
            return i+1;
        }
    }

    return l+1;

}

console.log('Testcase1');
console.log(smallestPostiveNumber([0,-10,1,3,-20]));

console.log('Testcase2');
console.log(smallestPostiveNumber([5,4,3,2,1,0]));

console.log('Testcase3');
console.log(smallestPostiveNumber([1,2,3,4,5]));

console.log('Testcase4');
console.log(smallestPostiveNumber([1,1,2]))