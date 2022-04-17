
function XorOfSums(nums){
    
    let res=0;

    for(let num of nums)
        res^=num;
    
    return 2*res;
        
}

console.log(XorOfSums([1,5,2,1,2]));