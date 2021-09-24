
function addition(b,n1,n2){
    let c=0;
    let pow=0;
    let res=0;
    while(c>0 || n1>0 || n2>0){
        let temp1=n1%10, temp2=n2%10;
        res+=((c+temp1+temp2)%b)*Math.pow(10,pow);
        c=parseInt((temp1+temp2+c)/b);
        pow++;
        n1=parseInt(n1/10);
        n2=parseInt(n2/10);
    }

    return res;
}

console.log(addition(8,777,1));