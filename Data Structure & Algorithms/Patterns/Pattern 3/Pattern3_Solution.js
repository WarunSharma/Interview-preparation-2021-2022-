
function printPattern(n){
    for(let i=1;i<=n;++i){
        for(let j=n-i;j>=1;--j){
            process.stdout.write("	");
        }
        for(let j=1;j<=i;++j){
            process.stdout.write("*	");
        }
        console.log();
    }
}

printPattern(5)