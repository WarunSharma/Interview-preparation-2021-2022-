
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let moveZeroesAtEnd = function(nums){

    let idx=0;
    let temp;
    for(let i=0;i<nums.length;++i){
        if(nums[i]!=0){
            temp=nums[i];
            nums[i]=nums[idx];
            nums[idx]=temp;
            idx++;
        }
    }

    return nums;
}

console.log('Testcase1');
console.log(moveZeroesAtEnd([1, 2, 0, 4, 3, 0, 5, 0]));

console.log('Testcase2');
console.log(moveZeroesAtEnd([1, 2, 0, 0, 0, 3, 6]));