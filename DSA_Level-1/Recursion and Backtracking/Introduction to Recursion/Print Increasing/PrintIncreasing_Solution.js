
function printIncreasing(n){
    if(n==0)
        return;
    printIncreasing(n-1);
    console.log(n);    
}

printIncreasing(5)