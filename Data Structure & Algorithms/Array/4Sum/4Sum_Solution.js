
//Time Complexity: O(n3) , Space Complexity: O(1)
let fourSum = function(nums,target){

    //If given array length is less
    if(nums.length<4){
        return [];
    }

    //Initialize resultant array
    let result = [];

    //Sort nums array in ascending order to apply Two-pointer approach
    let sortedNums = nums.sort((a,b)=>a-b);

    for(let i=0;i<sortedNums.length-3;++i){
        //Skipping duplicate elements 
        if(i>0 && sortedNums[i]==sortedNums[i-1]){
            continue;
        }
        for(let j=i+1;j<sortedNums.length-2;++j){
            //Skipping duplicate elements
            if(j>i+1 && sortedNums[j]==sortedNums[j-1]){
                continue;
            }
            let left=j+1,right=sortedNums.length-1;
            let sum=0;
            while(left<right){
                sum=sortedNums[i]+sortedNums[j]+sortedNums[left]+sortedNums[right];
                if(sum>target){
                    right--;
                }
                else if(sum<target){
                    left++;
                }
                else{
                    result.push([sortedNums[i],sortedNums[j],sortedNums[left],sortedNums[right]]);
                    left++;
                    right--;
                }

                //Skipping duplicate elements
                while(sortedNums[left]==sortedNums[left+1]){
                    left++;
                }

                //Skipping duplicate elements
                while(sortedNums[right]==sortedNums[right-1]){
                    right--;
                }
            }
        }
    }

    return result;
}

console.log('Testcase1')
console.log(fourSum([1,0,-1,0,-2,2],0));

console.log('Testcase2')
console.log(fourSum([2,2,2,2,2],8));