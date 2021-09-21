
function reverseNumber(num){
    while(num>0){
        let rem=num%10;
        console.log(rem);
        num=parseInt(num/10);
    }
}

reverseNumber(65784383);