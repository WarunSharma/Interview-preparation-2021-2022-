
function convertToDecimal(n,b){
    let quo=0,rem=0,pow=0,res=0;
      while(n>0){
          quo=parseInt(n/10);
          rem=n%10;
          res+=rem*Math.pow(b,pow);
          pow++;
          n=quo;
      }
      
      return res;
}

console.log(convertToDecimal(111001,2));