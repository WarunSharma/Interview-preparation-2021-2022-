
function printPattern(num){
    let sp=num/2,st=1;
    for(let i=1;i<=num;++i){
        if(i!=(num+1)/2){
            for(let j=1;j<=sp;++j){
                process.stdout.write("\t");
            }
            for(let j=1;j<=st;++j){
                process.stdout.write("*\t");
            }
        }
        else{
            for(let j=1;j<=num;++j){
                process.stdout.write("*\t");
            }
        }

        if(i>num/2){
            st--;
        }
        else{
            st++;
        }
        console.log();
    }
}

printPattern(5);