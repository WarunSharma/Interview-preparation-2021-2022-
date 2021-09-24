
function primeFactorization(n){
    for(let div=2;div<=n;){
        //   while(n%div==0){
        //       process.stdout.write(div+ " ");
        //       n/=div;
        //   }
        if(n%div==0){
            process.stdout.write(div+ " ");
            n/=div;
        }
        else{
            ++div;
        }
      }
}

primeFactorization(1440);