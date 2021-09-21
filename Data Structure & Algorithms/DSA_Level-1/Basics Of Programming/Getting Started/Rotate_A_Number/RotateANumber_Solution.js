
function rotateNumber(num,rot){
    let tempNum=num;
    let result=0;
    let Q=parseInt(tempNum/Math.pow(10,rot));
    let R=tempNum%Math.pow(10,rot);
    let digit=0;
    while(tempNum>0){
        tempNum=parseInt(tempNum/10);
        ++digit;
    }
    rot%=digit;
    if(rot<0){
        rot+=digit;
    }
    tempNum=num;
    let div=1;
    let mult=1;
        
    for (let i = 1; i <= digit; i++)
    {
        if (i <= rot) //while the iterator is less than k
        { //we increase the value of divisor
            div *= 10;
        }
        else         //or else we increase the value of multiplier
        {
            mult *= 10;
        }
    }

    let quo = parseInt(tempNum / div);    // extracting the quotient
    let rem = tempNum % div;    // extracting the remainder
    
    let r = rem * mult + quo; //forming the rotated number
    console.log(r);
}

rotateNumber(12340056,3);