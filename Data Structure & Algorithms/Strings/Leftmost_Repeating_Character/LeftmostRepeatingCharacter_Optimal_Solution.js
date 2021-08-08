
/*
*
* Time Complexity:O(n)
* Space Complexity: O(1)
*
* @param str Given string
* @return (i)th element or -1
*
*/

function leftMostRepeatingCharacter(str){
    let i=0;
    let res=Number.MAX_SAFE_INTEGER;
    let firstOccurence=new Array(256).fill(-1);
    while(i<str.length){
        if(firstOccurence[str.charCodeAt(i)]==-1){
            firstOccurence[str.charCodeAt(i)]=i;
        }
        else{
            res=Math.min(res,firstOccurence[str.charCodeAt(i)]);
        }
        ++i;
    }

    return res==Number.MAX_SAFE_INTEGER?-1:res;
}

//Testcases
console.log('Testcase 1');
console.log(leftMostRepeatingCharacter('geeksforgeeks'));

console.log('Testcase 1');
console.log(leftMostRepeatingCharacter('abcd'));