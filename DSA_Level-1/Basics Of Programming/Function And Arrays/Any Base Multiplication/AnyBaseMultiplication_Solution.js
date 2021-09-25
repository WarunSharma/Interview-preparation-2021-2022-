
function multiplyByDigit(b,n1,d2){
    let pow=0,result=0;
    let c=0;
    while(n1>0 || c>0){
        let d1=n1%10;
        let m=(d1*d2)+c;
        c=parseInt(m/b);
        let rem=m%b;
        result+=rem*Math.pow(10,pow);
        n1=parseInt(n1/10);
        pow++;
    }

    return result;
}

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

function multiplication(b,n1,n2){
    let res=0;
    let pow=0;
    while(n2>0){
        let d2=n2%10;
        let multResult=multiplyByDigit(b,n1,d2);
        multResult=multResult*Math.pow(10,pow);
        res=addition(b,res,multResult);
        n2=parseInt(n2/10);
        pow++
    }

    return res;
}

console.log(multiplication(5,1220,31));