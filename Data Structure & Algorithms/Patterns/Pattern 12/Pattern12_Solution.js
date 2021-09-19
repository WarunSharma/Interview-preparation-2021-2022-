
function printPattern(num) {
    let a = 0, b = 1, c;
    for (let i = 1; i <= num; ++i) {
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(a + "\t");
            c = a + b;
            a = b;
            b = c;
        }
        console.log();
    }
}

printPattern(5);