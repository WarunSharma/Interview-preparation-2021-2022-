
function printPattern(num){
    let sp=num/2,st=1;
    let n=1;
    for(let i=1;i<=num;++i){
        let temp=n;
        for(let j=1;j<=sp;++j){
            process.stdout.write('\t');
        }
        for(let j=1;j<=st;++j){
            //process.stdout.write('*\t');
            process.stdout.write(n+'\t');
            if(j>st/2){
                --n;
            }
            else{
                ++n;
            }
        }

        n=temp;
        if(i>num/2){
            ++sp;
            st-=2;
            --n;
        }
        else{
            --sp;
            st+=2;
            ++n;
        }
        console.log();
    }
}

printPattern(5)