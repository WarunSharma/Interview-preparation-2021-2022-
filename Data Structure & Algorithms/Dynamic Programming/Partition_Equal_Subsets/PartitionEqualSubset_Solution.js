
function partitionSubset(arr,sum,N){
    if(N==0){
        return false;
    }

    if(sum==0){
        return true;
    }

    if(arr[N-1]>sum){
        return partitionSubset(arr,sum,N-1);
    }
    return partitionSubset(arr,sum,N-1) || partitionSubset(arr,sum-arr[N-1],N-1);
}

function partition(arr){
    let sum=arr.reduce((ele,acc)=>acc+ele);
    if(sum%2!=0){
        return false;
    }
    else{
        return partitionSubset(arr,sum/2,arr.length);
    }
}

console.log('Testcase 1')
console.log(partition([1,2,6,3]));

console.log('Testcase 2')
console.log(partition([1, 3, 5]));

console.log('Testcase 3')
console.log(partition([1, 5, 11, 5]));