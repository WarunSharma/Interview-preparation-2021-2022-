
/*
*
* Time Complexity: O(n2)
* Space Complexity: O(n2) stack space
*
* @param str Given string
* @param output Print string
*
*/

function printSubsequence(str,output){
    if(str.length==0){
        console.log(output);
        return;
    }

    printSubsequence(str.substr(1,str.length-1),output+str[0]);

    printSubsequence(str.substr(1,str.length-1),output);
}

//Testcases
console.log('Testcase 1');
printSubsequence("abc",'');

console.log('Testcase 2');
printSubsequence("aaa",'');

console.log('Testcase 3');
printSubsequence("abcd",'');