
function powerOfFour(n){
    let x=n&(n-1);
        
        if(n>0 && x==0){
            let count=0;
            
            while(n>1){
                n=n>>1;
                ++count;
            }
            
            return count%2==0?true:false;
        }
        
        return false;
}

console.log(powerOfFour(16));
console.log(powerOfFour(5));