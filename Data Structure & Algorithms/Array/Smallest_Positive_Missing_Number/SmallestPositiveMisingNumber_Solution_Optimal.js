

/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let smallestPostiveNumber = function(nums){
    let temp;
    let i=0;
    while(i<nums.length){
        if(nums[i]<nums.length-1 && nums[i]>=0 && nums[i]!=i){
            temp=nums[nums[i]];
            nums[nums[i]]=nums[i];
            nums[i]=temp;
        }
        else{
            ++i;
        }
    }

    for(let i=0;i<nums.length;++i){
        if(nums[i]!=i){
            return i;
        }
    }

    return nums.length;

}

console.log('Testcase1');
console.log(smallestPostiveNumber([0,-10,1,3,-20]))

console.log('Testcase2');
console.log(smallestPostiveNumber([5,4,3,2,1,0]))

console.log('Testcase3');
console.log(smallestPostiveNumber([1,2,3,4,5]))