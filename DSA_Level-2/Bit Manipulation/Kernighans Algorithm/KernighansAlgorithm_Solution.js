
function kernighans(n){
    let temp=n;
    let count=0;
    while(temp>0){
        let rsb=temp&-temp;
        temp=temp^rsb;
        ++count;
    }

    console.log(count);
}

kernighans(58);