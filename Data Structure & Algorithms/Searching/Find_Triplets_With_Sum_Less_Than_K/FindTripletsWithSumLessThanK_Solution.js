
function countTriplets(arr,n,sum){
    let count=0;
    arr=arr.sort((a,b)=>a-b);
    console.log(arr);
    for(let i=0;i<n-2;i++){
        let left=i+1,right=n-1;
        while(left<right){
            if(arr[i]+arr[left]+arr[right]>=sum){
                right--;
            }
            else{
                count+=right-left;
                ++left;
            }
        }
    }

    return count;
}

console.log('Testcase1');
console.log(countTriplets([-2, 0, 1, 3],4,2));

console.log('Testcase2');
console.log(countTriplets([5, 1, 3, 4, 7],5,12));

console.log('Testcase3');
console.log(countTriplets([30,8,23,6,10,9,31,7,19,20,1,33,21,27,28,3,25,26],18,86));