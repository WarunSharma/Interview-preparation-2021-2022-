

function rsbMask(n){

    // let onesComp=~n;
    // let twosComp=onesComp+1;
    // let res=n&twosComp;
    //Or

    let res=n&-n;

    return res;
}

console.log(rsbMask(58));