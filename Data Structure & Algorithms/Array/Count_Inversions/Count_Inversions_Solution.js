
function countInversions(nums){
    let inversions=0;
    for(let i=0;i<nums.length-1;++i){
        for(let j=i+1;j<nums.length;++j){
            if(nums[i]>nums[j]){
                inversions++;
            }
        }
    }

    return inversions;
}

console.log('Testcase1');
console.log(countInversions([8, 4, 2, 1]))

console.log('Testcase2');
console.log(countInversions([3, 1, 2]))

console.log('Testcase3');
console.log(countInversions([1,2,3,4]))

console.log('Testcase4');
console.log(countInversions([]))