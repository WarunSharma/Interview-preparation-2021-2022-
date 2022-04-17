
function allRepeatingThrice(nums){
    
    let tn=Number.MAX_SAFE_INTEGER, tn1=0, tn2=0;

    for(let num of nums){
        
        cm=tn&num;
        cm1=tn1&num;
        cm2=tn2&num;

        tn=tn&~cm;
        tn1=tn1|cm;

        tn1=tn1&~cm1;
        tn2=tn2|cm1;

        tn2=tn2&~cm2;
        tn=tn|cm2;

    }

    console.log(tn1);
}

allRepeatingThrice([1,1,1,2]);