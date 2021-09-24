
function isNumberPrime(nums){
    for(let num of nums){
        let isPrime=true;
        for(let i=2;i*i<=num;++i){
            if(num%i==0){
                isPrime=false;
            }
        }

        if(isPrime){
            console.log('prime');
        }
        else{
            console.log('not prime');
        }

    }
}

isNumberPrime([13,2,3,4,5]);