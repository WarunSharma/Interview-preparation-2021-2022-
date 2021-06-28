
/*
* Time Complexity: O(n) or O(m)
* Space Complexity: O(n+m)
*/

let unionOfTwoArray=function(nums1,nums2){
    let set=new Set();

    nums1.map(el=>{
        set.add(el);
    });

    nums2.map(el=>{
        set.add(el);
    });

    let res=[];

    for(let i of set){
        res.push(i);
    }

    return res.length;
}

console.log('Testcase1');
console.log(unionOfTwoArray([1, 2, 3, 4, 5],[1, 2, 3]));