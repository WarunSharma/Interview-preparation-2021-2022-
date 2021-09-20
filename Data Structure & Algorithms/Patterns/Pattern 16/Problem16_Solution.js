
function printPattern(num){
    for(let i=1;i<=num;++i){
        let start=1,spaces=(2*num)-(2*i)-1;
        for(let j=1;j<=i;++j){
            process.stdout.write(start+"\t");
            if(j!=i)
            start++;
        }
        
        for(let j=1;j<=spaces;++j){
            process.stdout.write("\t");
        }
        
        if(start==num){
            start--;
        }
        
        for(let j=1;j<=i;++j){
            if(j!=num)
            {
                process.stdout.write(start+"\t");
                start--;
            }
        }
        
        console.log();
    }
}

printPattern(7);