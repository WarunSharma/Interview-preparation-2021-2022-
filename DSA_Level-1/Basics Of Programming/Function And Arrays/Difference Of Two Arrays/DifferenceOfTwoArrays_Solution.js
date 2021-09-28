
function difference(n1,a1,n2,a2){
    let c=0;
    let res=[];

    while(n1>0 || n2>0){
        let d1=0,d2=0;
        let diff;
        if(n1>0){
            d1=a1[n1-1];
        }
        if(n2>0){
            d2=a2[n2-1];
        }

        d2+=c;
        
        if(d1){
            if(d2<d1){
                diff=d2+10-d1;
                c=-1;
            }
            else{
                diff=d2-d1;
                c=0;
            }
        }
        else{
                diff=d2;
                c=0;
        }

        res[n2-1]=diff;
        n1--;
        n2--;
    }

    let i=0;
    while(res[i]==0){
        ++i;
    }

    while(i<res.length){
        console.log(res[i]);
        ++i;
    }
}

difference(3,[2,6,7],4,[1,0,0,0]);