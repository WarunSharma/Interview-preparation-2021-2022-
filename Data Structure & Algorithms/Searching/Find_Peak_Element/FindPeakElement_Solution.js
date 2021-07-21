
function findPeak(nums){
    let low=0,high=nums.length-1;
    while(high-low>1){
        let mid=Math.floor((low+high)/2);
        if(nums[mid-1]<=nums[mid] && nums[mid]<=nums[mid+1]){
            low=mid;
        }
        else{
            high=mid;
        }
    }

    return nums[low]>nums[high]?nums[low]:nums[high];
}

console.log('Testcase1');
console.log(findPeak([5, 10, 20, 15]));

console.log('Testcase2');
console.log(findPeak([10, 20, 15, 2, 23, 90, 67]));

console.log('Testcase3');
console.log(findPeak([1,1,1,3]));

console.log('Testcase4');
console.log(findPeak([1,2]));