
function convertToAnyBase(n, b) {
    let result = 0;
    let q = 0, rem = 0, pow = 0;
    while (n > 0) {
        q = parseInt(n / b);
        rem = n % b;
        result += rem * Math.pow(10, pow);
        pow++;
        n = q;
    }
    return result;
}

console.log(convertToAnyBase(57,2));