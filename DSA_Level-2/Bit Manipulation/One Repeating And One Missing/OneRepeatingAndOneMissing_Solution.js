
function repeatingAndMissing(nums){
    let repeatArr=[...nums];
    for(let i=0;i<nums.length;++i){
        repeatArr.push(i+1);
    }

    let res=0;

    for(let a of repeatArr){
        res^=a;
    }

    let rsb=res&-res;
    let setA=0,setB=0;

    for(let a of repeatArr){
        if((rsb&a)==0){
            setA^=a;
        }
        else{
            setB^=a;
        }
    }

    for(let a of repeatArr){
        if(setA==a){
            console.log("Missing Number: "+setB);
            console.log("Repeating: "+setA);
            break;
        }
        else{
            console.log("Missing Number: "+setA);
            console.log("Repeating: "+setB);
            break;
        }
    }

}

repeatingAndMissing([1 ,3 ,4 ,5 ,1 ,6 ,2]);