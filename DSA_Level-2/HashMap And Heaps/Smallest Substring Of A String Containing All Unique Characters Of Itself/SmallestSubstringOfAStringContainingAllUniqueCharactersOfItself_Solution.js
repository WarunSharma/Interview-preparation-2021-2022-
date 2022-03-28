
function smallestSubstring(mainStr){
    let patMap=new Map();

    for(let a of mainStr){
        patMap.set(a,1);
    }

    let mainStrMap=new Map();

    let count=0;
    let dCount=patMap.size;
    let smLength=10000000000;

    // console.log(patMap);
    // console.log(dCount);

    let i=-1,j=-1;
    while(i<mainStr.length){

        while(i<mainStr.length && count!=dCount){
            let ch=mainStr[++i];
            if(mainStrMap.has(ch)){
                mainStrMap.set(ch,mainStrMap.get(ch)+1);
            }
            else{
                mainStrMap.set(ch,1);
            }

            if(patMap.get(ch)>=mainStrMap.get(ch)){
                ++count;
            }

        }

        while(j<i && count==dCount){
            let ch=mainStr[++j];
            let len=i-j+1;
            smLength=smLength>len?len:smLength;
            mainStrMap.set(ch,mainStrMap.get(ch)-1);

            if(mainStrMap.get(ch)==0)
            {
                mainStrMap.delete(ch);
                --count; 
            }  

        }

    }

    console.log(smLength);
}

smallestSubstring("aabcbcdbca");