
function largestSubarray(arr){
    
    let map=new Map();

    let sum=0;
    let maxLength=0;
    map.set(sum,-1);

    for(let i=0;i<arr.length;++i){
        
        sum+=arr[i];
        if(map.has(sum)){
            maxLength=Math.max(maxLength,i-map.get(sum));
        }
        else
            map.set(sum,i);

    }

    console.log(map);

    console.log(maxLength);

}

largestSubarray([15,-2,2,-8,1,7,10,23]);

