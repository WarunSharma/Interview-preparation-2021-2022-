
function countDigits(n){
    let d=0;
    while(n>0){
        ++d;
        n=parseInt(n/10);
    }
    console.log(d);
}

countDigits(65784383)