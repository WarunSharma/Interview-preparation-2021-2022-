
function printAllPrimes(low,high){
    for(let num=low;num<=high;++num){
        let isPrime=true;
        for(let i=2;i*i<=num;++i){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log(num);
        }
    }
}

printAllPrimes(6,24);