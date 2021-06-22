
let leftRotation = function(nums,t,k){
    let l=nums.length;
    k%=l;
    
    if(t=='R'){
        let temp;

        //Reverse first length-k elements
        for(let i=0,j=l-k-1;i<j;--j,++i){
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }

        //Reverse other half
        for(let i=l-k,j=l-1;i<j;--j,++i){
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }

        //Reverse whole array
        for(let i=0,j=l-1;i<j;--j,++i){
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }
        return nums;
    }
    else{

        let temp;

        //Reverse first K elements
        for(let i=0,j=k-1;i<j;--j,++i){
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }

        //Reverse other half
        for(let i=k,j=l-1;i<j;--j,++i){
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }

        //Reverse whole array
        for(let i=0,j=l-1;i<j;--j,++i){
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }
        return nums;
    }
    
}

console.log('Testcase1')
console.log(leftRotation([1,2,3,4,5],'R',1))

console.log('Testcase2')
console.log(leftRotation([1,2,3,4,5],'L',1))

console.log('Testcase3')
console.log(leftRotation([1,2,3,4,5],'L',3))

console.log('Testcase3')
console.log(leftRotation([1,2,3,4,5],'R',3))