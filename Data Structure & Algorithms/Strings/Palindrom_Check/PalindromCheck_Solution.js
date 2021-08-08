
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param S Given string
* @returns 0/1
*
*/

function isPlaindrome(S){

    //Initialize start and end pointers
    let start=0,end=S.length-1;

    //Traverse from start and end
    while(start<end){

        //Comparing elements from starting and ending
        if(S[start].toLowerCase()!=S[end].toLowerCase()){
            return 0;
        }
        ++start;
        --end;
    }
    return 1;
}

//Testcases
console.log('Testcase1')
console.log(isPlaindrome('Madam'))

console.log('Testcase2');
console.log(isPlaindrome('string'));