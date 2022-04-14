
function allRepeatingExceptTwo(nums){
    let res=0;

    for(let num of nums){
        res^=num;
    }

    let rsb=res&-res;
    let setA=0,setB=0;

    for(let num of nums){
        if((num&rsb)==0){
            setA^=num;
        }
        else{
            setB^=num;
        }
    }

    if(setA<setB){
        console.log(setA);
        console.log(setB);
    }
    else{
        console.log(setB);
        console.log(setA);
    }
}

allRepeatingExceptTwo([23, 27, 23, 17, 17, 37]);