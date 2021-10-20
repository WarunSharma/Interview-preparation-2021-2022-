
let keypad=[".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"];

function getKpc(str){

    if(str.length==0){
        let res=new Array();
        res.push("");
        return res;
    }

    let code=str[0];
    let substr=str.substring(1);

    let thatRes=getKpc(substr);
    let thisRes=[];

    let keypadCode=keypad[code-'0'];

    for(let i=0;i<keypadCode.length;++i){
        let ch=keypadCode[i];
        for(let s of thatRes){
            thisRes.push(ch+s);
        }
    }

    return thisRes;
}

console.log(getKpc("78"))