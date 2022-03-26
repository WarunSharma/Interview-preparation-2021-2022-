
function CheckIfArrayPartition(arr,k){
    let map=new Map();

    for(let a of arr){
        let mod=a%k;
        if(map.has(mod)){
            map.set(mod,map.get(mod)+1);
        }
        else{
            map.set(mod,1);
        }
    }

    //console.log(map);

    let mid=0;

    if(map.size%2==0){
        mid=map.size/2;
    }
    else{
        mid=(map.size+1)/2;
    }

    //console.log(mid);

    let i=0;
    while(i<mid){
        if(i==0){
            if(map.get(0)%2==1)
                return false;
        }
        else{
            if(map.get(i)!=map.get(k-i))
                return false;
        }
        ++i;
    }

    return true;
}

console.log(CheckIfArrayPartition([9,7,5,3],6));
console.log(CheckIfArrayPartition([9,7,5,3,1],6));