
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param s Givem string
*
*/

function duplicatesInString(s){
    let map=new Map();
    let i=0;
    while(i<s.length){
        if(map.has(s[i])){
            let temp=map.get(s[i]);
            map.set(s[i],temp+1);
        }
        else{
            map.set(s[i],1);
        }
        ++i;
    }

    for(let [key,value] of map){
        if(value>1)
        {
            console.log(key);
        }
    }
}

//Testcases
console.log('Testcase 1')
duplicatesInString("geeksforgeeks");