
function findPairs(nums,k){
    let low=0,high=1;
    nums=nums.sort((a,b)=>a-b);
    console.log(nums);
    if(nums.length<=1){
        return false; 
    }
    else{
        while(low<nums.length && high<nums.length){
            if(low!=high && nums[high]-nums[low]>k){
                low++;
            }
            else if(nums[high]-nums[low]<k){
                high++;
            }
            else{
                return true;
            }
        }
    }
    return false; 
}

console.log('Testcase1');
console.log(findPairs([5, 20, 3, 2, 5, 80],78));

console.log('Testcase1');
console.log(findPairs([90, 70, 20, 80, 50],45));