
/*
*
* Time Complexity: O(n2)
* Space Complexity: O(1)
*
* @param s Given string
* @returns (i)th index element or '$'
*
*/

function nonrepeatingCharacter(s)
{
    let i=0;
    while(i<s.length){
        let j=0;
        let flag=false;
        while(j<s.length){
            if(i!=j && s[i]==s[j]){
                flag=true;
                break;
            }
            ++j;
        }
        if(!flag){
            return s[i];
        }
        ++i;
    }
    
    return '$';
}

//Testcases
console.log('Testcase 1');
console.log(nonrepeatingCharacter('geeksforgeeks'));

console.log('Testcase 2');
console.log(nonrepeatingCharacter('abac'));