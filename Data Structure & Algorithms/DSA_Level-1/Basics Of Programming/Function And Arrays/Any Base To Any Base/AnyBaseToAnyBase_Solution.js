
function anyBaseToAnyBase(n, sourceBase, destBase) {
    let dec = 0, quo = 0, rem = 0, pow = 0, res = 0;
    while (n > 0) {
        quo = parseInt(n / 10);
        rem = n % 10;
        dec += rem * Math.pow(sourceBase, pow);
        pow++;
        n = quo;
    }

    pow = 0;
    while (dec > 0) {
        quo = parseInt(dec / destBase);
        rem = dec % destBase;
        res += rem * Math.pow(10, pow);
        pow++;
        dec = quo;
    }
    
    return res;
}

console.log(anyBaseToAnyBase(111001, 2, 3));