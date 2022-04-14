
function josephus(n){
    let pow=1;
    
    while(pow*2<=n){
        pow*=2;
    }

    let l=n-pow;
    let res=2*l+1;

    console.log(res);
}

josephus(4);