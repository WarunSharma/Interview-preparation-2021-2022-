
function largestSubarray(arr){
    
    let map=new Map();

    let sum=0;
    let count=0;
    map.set(sum,1);

    for(let i=0;i<arr.length;++i){
        
        sum+=arr[i];
        if(map.has(sum)){
            count+=map.get(sum);
            map.set(sum,map.get(sum)+1);
        }
        else
            map.set(sum,1);

    }

    console.log(count);

}

largestSubarray([15,-2,2,-8,1,7,10,23]);
