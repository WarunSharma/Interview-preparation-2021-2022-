
function printPattern(num){
    let sp=0;st=num;
    for(let i=1;i<=num;++i){
        for(let j=1;j<=sp;++j){
            process.stdout.write("\t");
        }

        for(let j=1;j<=st;++j){
            if(i>num/2){
                process.stdout.write("*\t");
            }
            else{
                if((j==1 || j==st) || i==1){
                    process.stdout.write("*\t");
                }
                else{
                    process.stdout.write("\t");
                }
            }
        }

        for(let j=1;j<=sp;++j){
            process.stdout.write("\t");
        }

        if(i>num/2){
            sp-=1;
            st+=2;
        }
        else{
            sp+=1;
            st-=2;
        }

        console.log();
    }
}

printPattern(7);