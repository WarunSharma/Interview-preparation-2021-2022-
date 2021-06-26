
/*
* Time Complexity: O(nlogn)
* Space Complexity: O(1)
*/

let smallestPostiveNumber = function(nums){
    let num=0;

    let sortedNums=[];
    sortedNums=nums.sort((a,b)=>a-b);

    sortedNums.forEach(el=>{
        if(el==num){
            
            ++num;
        }
    })

    return num;

}

console.log('Testcase1');
console.log(smallestPostiveNumber([0,-10,1,3,-20]))

console.log('Testcase2');
console.log(smallestPostiveNumber([0,1,2,3,4,5]))