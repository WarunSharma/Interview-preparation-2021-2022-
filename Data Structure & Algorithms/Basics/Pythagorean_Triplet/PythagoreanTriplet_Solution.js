
function checkPythagoreanTriplet(a,b,c){
    if(a>b && a>c){
        if(Math.pow(a,2)==Math.pow(b,2)+Math.pow(c,2)){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
    else if(b>a && b>c){
        if(Math.pow(b,2)==Math.pow(a,2)+Math.pow(c,2)){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
    else{
        if(Math.pow(c,2)==Math.pow(b,2)+Math.pow(a,2)){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
}

checkPythagoreanTriplet(5,3,4);