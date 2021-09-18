
function printPattern(n){
    for(let i=1;i<=n;++i){
        for(let j=1;j<=i;++j){
            process.stdout.write("*	");
        }
        console.log();
    }
}

printPattern(5);