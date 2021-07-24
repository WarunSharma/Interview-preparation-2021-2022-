
function selectionSort(nums){
    let temp;
    for(let i=0;i<nums.length-1;++i){
        let minIdx=i;
        for(let j=i+1;j<nums.length;++j){
            if(nums[j]<nums[minIdx]){
                minIdx=j;
            }
        }
        temp=nums[minIdx];
        nums[minIdx]=nums[i];
        nums[i]=temp;
    }

    return nums;
}

console.log('Testcase1');
console.log(selectionSort([1,4,2,8,9,3,6]));

console.log('Testcase2');
console.log(selectionSort([1, 2, 3, 4, 6, 8, 9]));