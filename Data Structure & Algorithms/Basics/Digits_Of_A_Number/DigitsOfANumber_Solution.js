
function digitsOfANumber(num){
    let pow=1;
    let temp=num;
    while(temp>10){
        temp/=10;
        pow*=10;
    }
    //console.log(pow);

    temp=num;
    while(pow>=1){
        let q=parseInt(temp/pow);
        let rem=temp%pow;
        temp=rem;
        pow=pow/10;
        console.log(q);
    }

}

digitsOfANumber(234561);