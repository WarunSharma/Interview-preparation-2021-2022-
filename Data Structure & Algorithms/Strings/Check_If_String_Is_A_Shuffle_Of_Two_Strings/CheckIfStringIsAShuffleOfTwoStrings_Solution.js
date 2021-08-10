
/*
*
* @param str1 Given string 1
* @param str2 Given string 2
* @param result Given string
* @returns true/false
*
*/

function checkString(str1,str2,result){
    if(str1.length+str2.length!=result.length){
        return false;
    }
    else{
        let map=new Map();
        let i=0;
        while(i<str1.length){
            if(map.has(str1[i])){
                let temp=map.get(str1[i]);
                map.set(str1[i],temp+1);
            }
            else{
                map.set(str1[i],1);
            }
            ++i;
        }

        i=0;
        while(i<str2.length){
            if(map.has(str2[i])){
                let temp=map.get(str2[i]);
                map.set(str2[i],temp+1);
            }
            else{
                map.set(str2[i],1);
            }
            ++i;
        }

        i=0;
        while(i<result.length){
            if(map.has(result[i])){
                let temp=map.get(result[i]);
                map.set(result[i],temp-1);
            }
            else{
                return false;
            }
            ++i;
        }

        for(let [key,value] of map){
            if(value!=0)
            {
                return false;
            }
        }

    }

    return true;
}

//Testcases
console.log('Testcase 1');
console.log(checkString('XY','12','X1Y2'));

console.log('Testcase 2');
console.log(checkString('X','12','X1Y2'));

console.log('Testcase 3');
console.log(checkString('XZ','12','X1Y2'));