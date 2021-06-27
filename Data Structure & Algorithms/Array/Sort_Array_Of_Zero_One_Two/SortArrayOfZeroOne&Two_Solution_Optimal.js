

/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let sortArrayOfZeroOnetwo = function(nums){
    let low=0,mid=0,high=nums.length-1;
    let temp;
    while(mid<=high){
        if(nums[mid]==0){
            temp=nums[mid];
            nums[mid]=nums[low];
            nums[low]=temp;
            low++;
            mid++;
        }
        else if(nums[mid]==1){
            mid++;
        }
        else{
            temp=nums[mid];
            nums[mid]=nums[high];
            nums[high]=temp;
            high--;
        }
    }
    return nums;
}

console.log('Testcase1');
console.log(sortArrayOfZeroOnetwo([0 ,2 ,1 ,2 ,0]));

console.log('Testcase2');
console.log(sortArrayOfZeroOnetwo([0 ,1 , 0]));