
/*
*
* Time Complexity:O(n2)
* Space Complexity: O(1)
*
* @param str Given string
* @return (i)th element or -1
*
*/

function leftMostRepeatingCharacter(str){
    let i=0;
    while(i<str.length-1){
        let j=i+1;
        while(j<str.length){
            if(str[i]==str[j]){
                return str[i];
            }
            ++j;
        }
        ++i;
    }

    return -1;
}

//Testcases
console.log('Testcase 1');
console.log(leftMostRepeatingCharacter('geeksforgeeks'));

console.log('Testcase 1');
console.log(leftMostRepeatingCharacter('abcd'));