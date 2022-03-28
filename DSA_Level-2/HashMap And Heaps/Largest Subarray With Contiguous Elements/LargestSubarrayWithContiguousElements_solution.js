
function largestContiguousSubarray(arr){
    let maxLength=0;

    for(let i=0;i<arr.length-1;++i){
        let set=new Set();
        set.add(arr[i]);

        let min=arr[i];
        let max=arr[i];

        for(let j=i+1;j<arr.length;++j){

            if(set.has(arr[j]))
                break;
            max=max<arr[j]?arr[j]:max;
            min=min>arr[j]?arr[j]:min;

            set.add(arr[j]);
            if(max-min==j-i && maxLength<j-i+1){
                maxLength=j-i+1;
            }
        }
    }

    console.log(maxLength);
}

largestContiguousSubarray([10, 12, 11]);