
function getCommonElements(arr1,arr2){
    let res=[];

    let map=new Map();
    arr1.map(val=>{
        map.set(val,1);
    })

    arr2.map(val=>{
        if(map.has(val) && map.get(val)==1){
            res.push(val);
            map.set(val,2);
        }
    })

    return res;
}

console.log(getCommonElements([5,5,9,8,5,5,8,0,3],[9,7,1,0,3,6,5,9,1,1,8,0,2,4,2,9,1,5]));