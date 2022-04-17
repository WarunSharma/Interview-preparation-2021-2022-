
function copySetBits(a,b,n,m){
    
    let mask=1<<((m-n)-1);
    
    mask=mask<<(n-1);
    mask=mask&a;
    let res=b|mask;

    console.log(res);

}

copySetBits(10,13,2,3);