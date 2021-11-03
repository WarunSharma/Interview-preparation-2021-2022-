
function printTargetSumSubsets(arr, idx, set, sos, tar) {

    if (idx == arr.length) { //2
        if (sos == tar) {
          console.log(set + ".");
        }
        return;
    }
        
    printTargetSumSubsets(arr,idx+1,set+arr[idx]+",",sos+arr[idx],tar);
    printTargetSumSubsets(arr,idx+1,set,sos,tar);
}

printTargetSumSubsets([10,20,30,40,50],0,"",0,60);