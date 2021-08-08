
/*
*
* Time Complexity: O(n)
* Space Complexity: O(n)
*
* @param s Given string
* @returns result
*
*/
function reverseWords(s){
    return s.split(' ').reverse().join(' ');
}

//Testcases
console.log('Testcase 1');
console.log(reverseWords('geeks quiz practice code'));