
function smallestSubstring(mainStr,patStr){
    let mainStrMap=new Map();
    let patStrMap=new Map();

    for(let ch of patStr){
        if(patStrMap.has(ch)){
            patStrMap.set(ch,patStrMap.get(ch)+1);
        }
        else{
            patStrMap.set(ch,1);
        }
    }

    let desiredCount=patStr.length;
    let count=0;

    let i=-1,j=-1;
    let substr="";

    while(i<mainStr.length){
        while(count<desiredCount && i<mainStr.length){
            let ch=mainStr[++i];
            if(mainStrMap.has(ch)){
                mainStrMap.set(ch,mainStrMap.get(ch)+1);
            }
            else{
                mainStrMap.set(ch,1);
            }

            if(mainStrMap.get(ch)<=patStrMap.get(ch)){
                ++count;
            }
        }

        while(j<i && count==desiredCount){
            let ch=mainStr[++j];
            
            let tempStr=mainStr.substring(j,i+1);

            if(substr=="" || tempStr.length<substr.length){
                substr=tempStr;
            }

            mainStrMap.set(ch,mainStrMap.get(ch)-1);

            if(mainStrMap.get(ch)==0){
                mainStrMap.delete(ch);
            }

            if(mainStrMap.has(ch)){
                if(mainStrMap.get(ch)<patStrMap.get(ch)){
                    --count;
                }
            }
            else{
                if(patStrMap.has(ch))
                    --count;
            }
        }
    }


    console.log(substr);
}

smallestSubstring("timetopractice","toc");