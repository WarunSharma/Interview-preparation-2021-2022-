
function commonElements(arr1, arr2, arr3){
    let hashMap=new Map();
    let res=[];
    for(let a of arr1){
        hashMap.set(a,1);
    }
    
    for(let a of arr2){
        if(hashMap.has(a))
            hashMap.set(a,2);
    }
    
    for(let a of arr3){
        let temp=hashMap.get(a);
        if(temp>=2)
            hashMap.set(a,3);
    }
    
    for(let [key,value] of hashMap.entries()){
        if(value==3){
            res.push(key);
        }
    }
    return res.length>0?res:[-1];
}

console.log('Testcase1')
console.log(commonElements([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120]));

console.log('Testcase2')
console.log(commonElements([1,2,3],[4,5,6],[7,8,9]))