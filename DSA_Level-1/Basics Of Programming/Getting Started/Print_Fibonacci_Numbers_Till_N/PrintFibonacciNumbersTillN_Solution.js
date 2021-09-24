
function printFibonacciNumbers(n){
    let first=0,second=1,third;
    if(n==1){
        console.log(first);
    }
    else if(n==2){
        console.log(first);
        console.log(second);
    }
    else{
        console.log(first);
        console.log(second);
        for(let i=3;i<=n;++i){
            third=first+second;
            first=second;
            second=third;
            console.log(third);
        }
    }
}

printFibonacciNumbers(10);