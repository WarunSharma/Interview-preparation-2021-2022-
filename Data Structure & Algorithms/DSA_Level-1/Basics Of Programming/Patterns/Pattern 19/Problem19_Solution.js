
function printPattern(num){
    for(let i=1;i<=num;++i){
        for(let j=1;j<=num;++j){
            if(i==1 && j<=(num+1)/2){
                process.stdout.write("*\t");
            }
            else if(i==num && j>=(num+1)/2){
                process.stdout.write("*\t");
            }
            else if(j==1 && i>=(num+1)/2){
                process.stdout.write("*\t");
            }
            else if(j==num && i<=(num+1)/2){
                process.stdout.write("*\t");
            }
            else if(j==(num+1)/2){
                process.stdout.write("*\t");
            }
            else if(i==(num+1)/2){
                process.stdout.write("*\t");
            }
            else{
                process.stdout.write("\t");
            }
        }
        console.log();
    }
}

printPattern(7);