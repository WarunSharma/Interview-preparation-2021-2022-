
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param a Given string 1
* @param b Given string 2
*
* @returns true/false
*
*/

function isAnagram(a, b)
{
    let occurence=new Array(26).fill(0);
    let i=0;
    while(i<a.length){
        occurence[a.charCodeAt(i)-97]++;
        ++i;
    }
    i=0;
    while(i<b.length){
        occurence[b.charCodeAt(i)-97]--;
        ++i;
    }
    i=0;
    while(i<26){
        if(occurence[i]!=0)
            return false;
            
        ++i;    
    }
    return true;
}

//Testcases
console.log('Testcase 1');
console.log(isAnagram('geeks','eekgs'));

console.log('Testcase 2');
console.log(isAnagram('warun','ruand'));