
function longestSubstring(str){
    let map=new Map();

    let i=-1;
    let j=-1;

    let maxLength=0;
    
    while(i<str.length){

        while(i<str.length){
            let ch=str[i++];
            let len=i-j;

            maxLength=len>maxLength?len:maxLength;
            if(map.has(ch)){
                map.set(ch,map.get(ch)+1);
                break;
            }
            else{
                map.set(ch,1);
            }
        }

        while(j<i){
            let ch=str[j++];

            map.set(ch,map.get(ch)-1);

            if(map.get(ch)==1){
                break;
            }
            else{
                map.delete(ch);
            }
        }
    }

    console.log(maxLength);
}

longestSubstring("aabcbcdbca");
longestSubstring("fmnhgfsgcjhvjhbjbhjkbjhvbncbgdsyfkujhbmnvxfgsdyjfkuhfhvcmnccnfxh");