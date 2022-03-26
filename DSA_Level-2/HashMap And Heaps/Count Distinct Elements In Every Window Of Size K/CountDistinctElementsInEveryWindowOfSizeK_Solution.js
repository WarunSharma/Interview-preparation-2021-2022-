
function countDistinctElements(arr,k){
    let map=new Map();

    for(let i=0;i<k;++i){
        let a = arr[i];
        if(map.has(a)){
            map.set(a,map.get(a)+1);
        }
        else{
            map.set(a,1);
        }
    }

    console.log(map.size);

    for(let i=k;i<arr.length;++i){
        map.set(arr[i-k],map.get(arr[i-k])-1);

        if(map.get(arr[i-k])==0){
            map.delete(arr[i-k]);
        }

        let a=arr[i];
        if(map.has(a)){
            map.set(a,map.get(a)+1);
        }
        else{
            map.set(a,1);
        }

        console.log(map.size);
    }
}

countDistinctElements([1,2,1,3,4,2,3],4)