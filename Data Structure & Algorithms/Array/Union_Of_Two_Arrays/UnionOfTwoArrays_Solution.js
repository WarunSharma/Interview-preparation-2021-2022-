
/*
*
* Time Complexity: O(n) or O(m)
* Space Complexity: O(n+m)
*
* @param nums1 Given array 1
* @param nums2 Given array 2
* @returns res Resultant array
*
*/

let unionOfTwoArray=function(nums1,nums2){

    //Set to store all elements
    let set=new Set();

    nums1.map(el=>{
        set.add(el);
    });

    nums2.map(el=>{
        set.add(el);
    });

    //Initialize res array
    let res=[];

    for(let i of set){
        res.push(i);
    }

    return res.length;
}

//Testcases
console.log('Testcase1');
console.log(unionOfTwoArray([1, 2, 3, 4, 5],[1, 2, 3]));