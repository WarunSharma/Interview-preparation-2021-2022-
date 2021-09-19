
function printPattern(num){
    let start=1, end=num;
    for(let i=1;i<=num;++i){
        for(let j=1;j<=num;++j){
            if(j==start || j==end){
                process.stdout.write("*	");
            }
            else{
                process.stdout.write("	");
            }
        }
        start++;
        end--;
        console.log();
    }
}

printPattern(5);