

let majorityElementII = function(nums){
    let res=[];
    let map=new Map();

    nums.forEach(element => {
        if(map.has(element)){
            let temp=map.get(element);
            map.set(element,temp+1);
        }
        else{
            map.set(element,1);
        }
    });

    for(let i of map){
        console.log(i)
        if(i[1]>Math.floor(nums.length/3)){
            res.push(i[0]);
        }
    }

    return res;
}


console.log('Testcase1');
console.log(majorityElementII([3,2,3]));

console.log('Testcase1');
console.log(majorityElementII([1]));

console.log('Testcase1');
console.log(majorityElementII([1,2]));