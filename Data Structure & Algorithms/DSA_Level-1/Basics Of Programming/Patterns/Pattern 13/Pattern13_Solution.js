
function printPattern(num){
    for(let i=0;i<num;++i){
        let icj=1;
        for(let j=0;j<=i;++j){
            process.stdout.write(icj+'\t');
            icj=(icj*(i-j))/(j+1);
        }
        console.log();
    }
}

printPattern(5);