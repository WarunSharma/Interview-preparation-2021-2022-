
function sumOfTwoArrays(n1,arr1,n2,arr2){
    let c=0;
    let idx;
    // let n1=arr1.length;
    // let n2=arr2.length;
    if(n1>n2){
        idx=n1;
    }
    else{
        idx=n2;
    }
    let res=[];
    console.log(idx);
    while(idx>0){
        let sum;
        if(n1>0 && n2>0){
            sum=arr1[n1-1]+arr2[n2-1]+c;
        }
        else if(n1>0 && n2<=0){
            sum=arr1[n1-1]+c;
        }
        else{
            sum=arr2[n2-1]+c;
        }
        if(idx!=1){
            c=parseInt(sum/10);
            res[idx-1]=sum%10;
        }
        else{
            res[idx-1]=sum;
        }
        --idx;
        --n1;
        --n2;
    }

    console.log(res);
}

sumOfTwoArrays(5,[3,1,0,7,5],6,[1,1,1,1,1,1]);

