
function squareRoot(num,precision){
    let low=0,high=num;
    while(high-low>precision){
        let mid=(low+high)/2;
        if(mid*mid>num){
            high=mid;
        }
        else{
            low=mid;
        }
    }
    return low;
}

console.log('Testcase1');
console.log(squareRoot(50,1));

console.log('Testcase2');
console.log(squareRoot(50,0.1));

console.log('Testcase3');
console.log(squareRoot(49,1));

console.log('Testcase4');
console.log(squareRoot(18982,0.001));