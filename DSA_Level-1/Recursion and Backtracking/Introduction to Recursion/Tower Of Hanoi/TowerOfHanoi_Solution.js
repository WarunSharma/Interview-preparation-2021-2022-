
function toh(n,t1,t2,t3){
    if(n==0){
        return;
    }

    toh(n-1,t1,t3,t2);
    console.log(n+"["+t1+" -> "+t2+"]");
    toh(n-1,t3,t2,t1);
}

toh(3,"A","B","C");