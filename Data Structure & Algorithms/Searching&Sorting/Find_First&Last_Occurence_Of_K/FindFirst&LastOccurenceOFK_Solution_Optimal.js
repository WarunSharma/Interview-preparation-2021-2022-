
/* Find first and last occurence of K
*  Time Complexity: O(n)
*  Space Complexity: O(1)
*/

function findFirstOccurence(nums,low,high,k){
    if(high>=low){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]==k && (nums[mid-1]!=k || mid==0)){
            return mid;
        }
        else if(nums[mid]>=k){
            return findFirstOccurence(nums,low,mid-1,k);
        }
        else{
            return findFirstOccurence(nums,mid+1,high,k);
        }
    }
    else 
        {
            return -1;
        }
}

function findLastOccurence(nums,low,high,k){
    if(high>=low){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]==k && (nums[mid+1]!=k || mid+1==nums.length)){
            return mid;
        }
        else if(nums[mid]>=k){
            return findLastOccurence(nums,low,mid-1,k);
        }
        else{
            return findLastOccurence(nums,mid+1,high,k);
        }
    }
    else{
        return -1;
    }
}

function findFirstAndLastOccurence(nums,k){
    let first;
    let last;
    let high=nums.length;
    let low=0;
    first=findFirstOccurence(nums,low,high,k);
    last=findLastOccurence(nums,low,high,k);
    console.log(first,last);
}

console.log('Testcase1');
findFirstAndLastOccurence([1,2,2,2,3,4],2);

console.log('Testcase2');
findFirstAndLastOccurence([1,2,3,4],2);
