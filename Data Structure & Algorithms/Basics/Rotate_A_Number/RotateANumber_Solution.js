
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
    if(rot<0){
        rot+=digit;
    }
    rot%=digit;
    result=(R*Math.pow(10,digit-rot))+Q;
    console.log(result);
}

rotateNumber(562984,2);