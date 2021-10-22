
let keypad=[".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"]; 

function printKpc(str,ans){
    if(str.length==0){
        console.log(ans);
        return; 
    }
    
    let code=str[0];
    let subStr=str.substring(1);
    
    let strCode=keypad[code-'0'];
    for(let i=0;i<strCode.length;++i){
        printKpc(subStr,ans+strCode[i]);
    }
}

printKpc("78","")