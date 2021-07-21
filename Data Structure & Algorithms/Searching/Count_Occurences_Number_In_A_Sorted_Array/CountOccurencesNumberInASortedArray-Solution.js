
function findFirstOccurence(nums,k){
    let low=0,high=nums.length-1,mid;
    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(nums[mid]>=k){
            high=mid;
        }
        else{
            low=mid;
        }
    }
    
    return nums[low]==k?low:nums[high]==k?high:-1;
}

function findLastOccurence(nums,k){
    let low=0,high=nums.length-1,mid;
    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(nums[mid]>k){
            high=mid;
        }
        else{
            low=mid;
        }
    }
    
    return nums[high]==k?high:nums[low]==k?low:-1;
}

function countOccurences(nums,k){
    let first=findFirstOccurence(nums,k);
    let last=findLastOccurence(nums,k);

    return first!=-1?last-first+1:0;
}

console.log('Testcase1')
console.log(countOccurences([1, 1, 2, 2, 2, 2, 3],2));

console.log('Testcase2')
console.log(countOccurences([1, 1, 2, 2, 2, 2, 3],4));

console.log('Testcase3')
console.log(countOccurences([1, 1, 2, 2, 2, 2, 3],3));

console.log('Testcase4')
console.log(countOccurences([1, 1, 2, 2, 2, 2, 3],1));