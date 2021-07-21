
function repeatElement(nums){
    let slow=nums[0]+1,fast=nums[0]+1;
    do{
        slow=nums[slow]+1;
        fast=nums[nums[fast]+1]+1;
    }while(slow!=fast)

    slow=nums[0]+1;
    while(slow!=fast){
        slow=nums[slow]+1;
        fast=nums[fast]+1;
    }

    return slow-1;
}

console.log('Testcase1');
console.log(repeatElement([0,1, 3, 2, 3, 4]));

console.log('Testcase2');
console.log(repeatElement([1,0, 5, 1, 2, 3, 4]));

console.log('Testcase3');
console.log(repeatElement([1,0, 2,2,2]));