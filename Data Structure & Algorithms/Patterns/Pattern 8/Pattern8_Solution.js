
function printPattern(num){
    for(let i=1;i<=num;++i){
            
        for(let j=num-i;j>=1;--j){
            process.stdout.write("	");
        }
        console.log("*");
    }
}

printPattern(5);