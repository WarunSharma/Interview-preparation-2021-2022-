
function pairsWithEqualSum(arr){
    let set=new Set();
    for(let i=0;i<arr.length-1;++i){
        for(let j=i+1;j<arr.length;++j){
            let sum=arr[i]+arr[j];

            if(set.has(sum)){
                console.log(true);
            }

            set.add(sum);
        }
    }

    console.log(false);
}

pairsWithEqualSum([1,2,998,72,87576,21,45,-1])