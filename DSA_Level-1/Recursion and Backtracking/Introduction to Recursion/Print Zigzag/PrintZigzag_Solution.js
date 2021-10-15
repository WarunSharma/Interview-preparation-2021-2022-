
function printZigzag(n){
    if(n==0){
        return;
    }

    console.log(n);
    printZigzag(n-1);
    console.log(n);
    printZigzag(n-1);
    console.log(n);
}

printZigzag(2);