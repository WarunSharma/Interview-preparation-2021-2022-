
function inverseNumber(num){
    let n=num;
    let result=0;
    let digit=1;
    while(n>0){
        let temp=n%10;
        result+=digit*Math.pow(10,temp-1);
        n=parseInt(n/10);
        digit++;
    }
    console.log(result);
}

inverseNumber(28346751);
