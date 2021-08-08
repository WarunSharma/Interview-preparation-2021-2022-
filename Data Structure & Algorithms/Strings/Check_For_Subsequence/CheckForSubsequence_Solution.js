
/*
*
* Time Complexity:O(aIdx+bIdx)
* Space Complexity:O(1)
*
* @param A Subsequence string
* @param B Main string
* @returns true/false 
*
*/

 function isSubSequence(A,B){
    let aIdx=0,bIdx=0;

    //Traverse till end of main string 'B'
    while(bIdx<B.length){

        //Compare B's elelement(main string) and A's element(subsequence string)
        if(B[bIdx]==A[aIdx]){
            ++bIdx;
            ++aIdx;
        }
        else{
            ++bIdx;
        }
    }
    
    //Return true if complete A string traversed else false
    return aIdx==A.length;
 }

//Testcases 
console.log('Testcase1');
console.log(isSubSequence('AXY','YADXCP'));

console.log('Testcase1');
console.log(isSubSequence('AXP','YADXCP'));