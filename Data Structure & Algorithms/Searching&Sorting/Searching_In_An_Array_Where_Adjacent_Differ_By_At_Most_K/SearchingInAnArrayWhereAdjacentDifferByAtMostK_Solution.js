
function search(nums,k,x){
    let i=0;
    while(i<nums.length){
        if(nums[i]==x){
            return i;
        }

        i=i+ Math.max(1,Math.floor(Math.abs(nums[i]-x)/k));
    }
    return -1;
}

console.log('Testcase1');
console.log(search([4, 5, 6, 7, 6],1,6));

console.log('Testcase2');
console.log(search([20, 40, 50, 70, 70, 60],20,60));