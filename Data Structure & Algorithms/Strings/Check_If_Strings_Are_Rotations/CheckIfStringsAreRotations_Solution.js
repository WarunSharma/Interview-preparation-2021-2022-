
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param str1 Given string 1
* @param str2 Given string 2
* @returns true/false
*
*/

function areRotations(str1, str2){
    let tempString=str1+str1;
    if(tempString.search(str2)>=0){
        return true;
    }

    return false;
}

//Testcases
console.log('Testcase 1');
console.log(areRotations("ABCD","CDAB"));

console.log('Testcase 2');
console.log(areRotations("ABC","CBA"));