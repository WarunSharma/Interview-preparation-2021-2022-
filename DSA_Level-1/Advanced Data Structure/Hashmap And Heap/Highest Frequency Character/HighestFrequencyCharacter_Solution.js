
function highestFrequencyCharacter(str){
    let map=new Map();

    for(let ch of str){
        if(map.has(ch)){
            let val=map.get(ch);
            map.set(ch,val+1);
        }
        else{
            map.set(ch,1);
        }
    }

    let maxValue=0;
    let maxChar;
    for(let [key,value] of map.entries()){
        if(value>maxValue){
            maxValue=value;
            maxChar=key;
        }
    }

    return maxChar;
}

console.log(highestFrequencyCharacter("zmszeqxllzvheqwrofgcuntypejcxovtaqbnqyqlmrwitc"));