
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let removeDuplicates=function(nums){
    let start=0;

    for(let i=0;i<nums.length;++i){
        if(nums[i]!=nums[i+1]){
            start++;
            nums[start]=nums[i+1];
        }
    }
    nums.length=start;

    return nums;
}

console.log('Testcase1')
console.log(removeDuplicates([1,1,2]));

console.log('Testcase2')
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));