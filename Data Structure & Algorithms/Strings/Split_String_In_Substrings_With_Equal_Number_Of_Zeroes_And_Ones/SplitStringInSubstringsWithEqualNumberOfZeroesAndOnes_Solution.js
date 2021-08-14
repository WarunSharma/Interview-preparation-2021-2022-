
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param str Given string
* @returns count Substrings count
*
*/

function substringsCount(str){
    let start=0;

    //Initialize zero's count, one's count, substrings count
    let zeroCount=0, oneCount=0, count=0;
    while(start<str.length){

        if(str[start]=='0'){
            zeroCount++;
        }
        if(str[start]=='1'){
            oneCount++;
        }

        //zerocount equals to oneCount means one substring
        if(zeroCount==oneCount){
            ++count;
        }
        ++start;
    }

    return count==0?-1:count;
}

//Testcases
console.log('Testcase 1');
console.log(substringsCount("0100110101"));

console.log('Testcase 2');
console.log(substringsCount("0000000000"));

console.log('Testcase 2');
console.log(substringsCount("0111100010"));