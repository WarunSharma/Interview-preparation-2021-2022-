
function merge(nums,l,mid,r){
    let res=new Array(r-l);
    let i=l,j=mid+1,k=0;
    while(i<=mid && j<=r){
        if(nums[i]<nums[j]){
            res[k++]=nums[i++];
        }
        else{
            res[k++]=nums[j++];
        }
    }

    while(i<=mid){
        res[k++]=nums[i++];
    }

    while(j<=r){
        res[k++]=nums[j++];
    }

    i=l,j=r,k=0;
    while(i<=j){
        nums[i++]=res[k++];
    }
}

function mergeSort(nums,l,r){
    if(l<r){
        let mid=Math.floor((l+r)/2);
        mergeSort(nums,l,mid);
        mergeSort(nums,mid+1,r);
        merge(nums,l,mid,r);
    }
    return nums;
}

console.log('Testcase1');
console.log(mergeSort([3,5,6,1,2],0,4));

console.log('Testcase2');
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10],0,6));