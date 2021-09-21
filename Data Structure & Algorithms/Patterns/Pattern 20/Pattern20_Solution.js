
function printPattern(num){
    for(let i=1;i<=num;++i){
        for(let j=1;j<=num;++j){
            if(j==1){
                process.stdout.write("*\t");
            }
            else if(j==num){
                process.stdout.write("*\t");
            }
            else if(i>num/2 && (i==j)){
                process.stdout.write("*\t");
            }
            else if(i>num/2 && (i+j==num+1)){
                process.stdout.write("*\t");
            }
            else{
                process.stdout.write("\t");
            }
        }
        console.log();
    }
}

printPattern(5);