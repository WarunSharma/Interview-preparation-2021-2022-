
function printPattern(num) {
    let n = 1;
    for (let i = 1; i <= num; ++i) {
        for (let j = 1; j <= i; ++j) {
            process.stdout.write((n) + "\t");
            n++;
        }
        console.log();
    }
}

printPattern(5)