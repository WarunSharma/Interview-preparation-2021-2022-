
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param s Given string
* @returns (i)th index element or '$'
*
*/

function nonrepeatingCharacter(s)
{
    let i=0;
    let occurence=new Array(256).fill(-1);
    while(i<s.length){
        if(occurence[s.charCodeAt(i)]==-1){
            occurence[s.charCodeAt(i)]=i;
        }
        else{
            occurence[s.charCodeAt(i)]=-2;
        }
        ++i;
    }

    i=0;
    let res=Number.MAX_SAFE_INTEGER;
    while(i<occurence.length){
        if(occurence[i]>=0){
            res=Math.min(res,occurence[i]);
        }
        ++i;
    }
    
    return res==Math.MAX_SAFE_INTEGER?'$':s[res];
}

//Testcases
console.log('Testcase 1');
console.log(nonrepeatingCharacter('geeksforgeeks'));

console.log('Testcase 2');
console.log(nonrepeatingCharacter('abac'));