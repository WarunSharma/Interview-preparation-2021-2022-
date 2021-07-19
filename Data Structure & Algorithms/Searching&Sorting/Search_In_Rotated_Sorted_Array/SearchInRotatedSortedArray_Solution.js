
function searchInRotatedSortedArray(nums,target){
    let low=0,high=arr.length-1,mid;

    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(arr[low]<arr[mid]){
            if(target>=arr[low] && target<=arr[mid]){
                high=mid;
            }
            else{
                low=mid;
            }
        }
        else{
            if(target>=arr[mid] && target<=arr[high]){
                low=mid;
            }
            else{
                high=mid;
            }
        }
    }    

    if(arr[low]==target)
        return low;
    if(arr[high]==target)
        return high;
            
    return -1;    
}

console.log('Testcase1');
console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2],0));

console.log('Testcase2');
console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2],4));

console.log('Testcase1');
console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2],1));

console.log('Testcase1');
console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2],6));