
function allRepeatingExceptOne(nums){
    let res=0;
    
    for(let num of nums){
        res^=num;
    }

    console.log(res);
}

allRepeatingExceptOne([23,27,23,17,17])