
function substraction(b,n1,n2){
    let c = 0;
    let pow = 0;
    let res = 0;
    while (n2 > 0) {
      let d1 = (n1 % 10);
      let d2 = (n2 % 10)+c;
      if (d2 < d1) {
        d2 = d2 + b - d1;
        res += d2 * Math.pow(10, pow);
        c = -1;
      }
      else {
        d2 = d2 - d1;
        res += d2 * Math.pow(10, pow);
        c=0;
      }
      pow++;
      n1 = parseInt( n1 / 10);
      n2 = parseInt( n2 / 10);
    }
    return res;
}

console.log(substraction(8,1,100));