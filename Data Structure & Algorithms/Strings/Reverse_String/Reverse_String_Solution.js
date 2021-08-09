
/*
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param s Givem string
* @returns s Resultant string
*/
var reverseString = function(s) {
    let start=0;
    let end=s.length-1;
    let ch;
    while(start<end)
        {
            ch=s[start];
            s[start]=s[end];
            s[end]=ch;
            ++start;
            --end;
        }

        return s;
};

//Testcases
console.log('Testcases 1');
console.log(reverseString(["h","e","l","l","o"]));

console.log('Testcases 2');
console.log(reverseString(["H","a","n","n","a","h"]));
