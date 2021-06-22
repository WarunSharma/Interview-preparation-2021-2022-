//Time Complexity: O(nlogn), Space Compexity: O(1)

let majorityElement = function(nums){
    let sortedNums=nums.sort((a,b)=>a-b);
    return sortedNums[Math.floor(nums.length/2)];
}

console.log('Testcase1');
console.log(majorityElement([3,2,3]));

console.log('Testcase2');
console.log(majorityElement([2,2,1,1,1,2,2]));