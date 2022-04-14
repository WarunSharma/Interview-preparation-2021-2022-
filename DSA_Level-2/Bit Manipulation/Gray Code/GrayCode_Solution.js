
function grayCode(num){

    if(num==1){
        let initialRes=[0,1]
        return initialRes;
    }

    let mres=grayCode(num-1);
    let res=[];

    for(let a of mres){
        res.push(a);
    }

    for(let a of mres){
        let mask=1<<(num-1);
        let temp=res.push(a|mask);
    }

    return res;
}

console.log(grayCode(2));