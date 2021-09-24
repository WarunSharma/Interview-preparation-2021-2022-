
function printPattern(n){
    for(let row=n;row>0;--row){
        for(let col=row;col>0;--col){
            process.stdout.write("*	");
        }
        console.log();
    }
}

printPattern(5);