
function printDecreasing(n){
    if(n<1)
        return;
    console.log(n);
    printDecreasing(n-1);
}
printDecreasing(5);