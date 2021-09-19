
function printPattern(num){
    for(let i=1;i<=num;++i){
        for(let j=1;j<=i-1;++j){
            process.stdout.write("	");
        }
        process.stdout.write("*");
        console.log();
    }
}

printPattern(5);