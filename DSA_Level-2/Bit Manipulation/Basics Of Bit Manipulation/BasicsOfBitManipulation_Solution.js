
function basics(n,i,j,k,m){
    
    let bMask=1<<i;
    console.log(n|bMask);

    bMask=1<<j;
    bMask=~bMask;
    console.log(n&bMask);

    bMask=1<<k;
    console.log(n^bMask);

    bMask=1<<m;
    console.log((n&bMask)==0?false:true);
    
}

basics(57, 3 ,3 ,3 ,3);