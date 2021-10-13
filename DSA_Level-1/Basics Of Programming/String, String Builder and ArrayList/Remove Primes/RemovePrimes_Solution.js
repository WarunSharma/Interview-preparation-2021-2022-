
function isPrime(n){
    for(let i=2;i*i<=n;++i){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

function removePrime(nums){
    for(let i=0;i<nums.length;){
        if(isPrime(nums[i])){
            nums.splice(i,1);
        }
        else{
            i++;
        }
    }

    console.log(nums);
}

removePrime([3,12,13,15]);