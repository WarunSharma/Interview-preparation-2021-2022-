
/*
*
* Time Complexity: O(n*n!)
*
* @param str Given character array
* @param start Starting index
* @param end Ending index
*
*/

function swap(str,start,end){
    let temp=str[start];
    str[start]=str[end];
    str[end]=temp;
}

function permutations(str,start,end){
    if(start==end){
        console.log(str);
        return;
    }

    for(let i=start;i<=end;++i){
        swap(str,start,i);
        permutations(str,start+1,end);
        swap(str,start,i);
    }
}

console.log('Testcase 1')
permutations(['a','b','c'],0,2);