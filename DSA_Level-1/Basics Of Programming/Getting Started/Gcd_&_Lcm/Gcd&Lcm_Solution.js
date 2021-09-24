
function calculateGcdLcm(n1,n2){
    let temp1=n1;
    let temp2=n2;
    let gcd,lcm;
    while(temp1%temp2!=0){
        let rem=temp1%temp2;
        temp1=temp2;
        temp2=rem;
    }
      
    gcd=temp2;
    lcm=(n1*n2)/gcd;
    console.log(gcd);
    console.log(lcm);
}

calculateGcdLcm(16,48);