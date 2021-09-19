
function printPattern(num){
    let start=parseInt(num/2)+1,end=parseInt(num/2)+1;
     for(let i=1;i<=num;++i){
         for(let j=1;j<=num;++j){
             if(j==start || j==end){
                process.stdout.write("*	");
             }
             else{
                process.stdout.write("	"); 
             }
         }
         if(i>num/2){
             ++start;
             --end;
         }
         else{
             --start;
             ++end;
         }
         
         console.log();
     }
}

printPattern(5);