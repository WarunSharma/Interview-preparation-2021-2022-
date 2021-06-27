
/*
* Time Complexity: O(n) or O(m)
* Space Complexity: O(n+m)
*/

let intersectionOfTwoArrays=function(nums1,nums2){
    let map=new Array(1001).fill(0);
    let res=[];

    nums1.map(el=>{
        if(map[el]!=1){
            map[el]++;
        }
    })

    nums2.map(el=>{
        if(map[el]==1){
            map[el]--;
            res.push(el);
        }
    })

    return res;
}

console.log('Testcase1');
console.log(intersectionOfTwoArrays([1,2,3,5,4],[2,3,1,9]));

console.log('Testcase2');
console.log(intersectionOfTwoArrays([1,2,3,5,2,2],[2,3,1,1,1]));

console.log('Testcase1');
console.log(intersectionOfTwoArrays([1,],[1,1]));

console.log('Testcase1');
console.log(intersectionOfTwoArrays([],[2,3,1,9]));