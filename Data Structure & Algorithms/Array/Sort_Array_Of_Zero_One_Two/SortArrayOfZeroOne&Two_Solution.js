
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let sortArrayOfZeroOnetwo = function(nums){
    let countZero=0,countOne=0,countTwo=0;
    for(let i=0;i<nums.length;++i){
        if(nums[i]==0){
            ++countZero;
        }
        else if(nums[i]==1){
            ++countOne;
        }
        else{
            ++countTwo;
        }
    }

    for(let i=0;i<nums.length;++i){
        if(countZero>0){
            nums[i]=0;
            countZero--;
        }
        else if(countOne>0){
            nums[i]=1;
            countOne--;
        }
        else{
            nums[i]=2;
            countTwo--;
        }
    }

    return nums;
}

console.log('Testcase1');
console.log(sortArrayOfZeroOnetwo([0 ,2 ,1 ,2 ,0]));

console.log('Testcase2');
console.log(sortArrayOfZeroOnetwo([0 ,1 , 0]));

console.log('Testcase3');
console.log(sortArrayOfZeroOnetwo([2,2]));

console.log('Testcase4');
console.log(sortArrayOfZeroOnetwo([1, 1]));