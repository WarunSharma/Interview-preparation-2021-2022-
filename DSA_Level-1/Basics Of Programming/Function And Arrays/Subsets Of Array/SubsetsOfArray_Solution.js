
function subsets(nums){
    let n=nums.length;
    let subsets=Math.pow(2,n);
    
    for(let i=0;i<subsets;++i){
        let temp=i;
        let set="";
        for(let j=n-1;j>=0;--j){
            let rem=temp%2;
            temp=parseInt(temp/2);
            if(rem==0){
                set="-\t"+set;
            }
            else{
                set=nums[j]+"\t"+set;
            }
        }
        console.log(set);
    }
}

subsets([10,20,30]);