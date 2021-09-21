
function printPattern(n){
    for(let i=n;i>=1;--i){
        for(let j=1;j<=n-i;++j){
            process.stdout.write("	");
        }
        for(let j=1;j<=i;++j){
            process.stdout.write("*	");
        }
        console.log();
    }
}

printPattern(5);