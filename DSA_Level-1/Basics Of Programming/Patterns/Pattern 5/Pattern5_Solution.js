

function printPattern(num) {
    let sp = num / 2, st = 1;

    for (let i = 1; i <= num; ++i) {
        for (let j = 1; j <= sp; ++j) {
            process.stdout.write("	");
        }
        for (let j = 1; j <= st; ++j) {
            process.stdout.write("*	");
        }
        if (i <= num / 2) {
            sp--;
            st += 2;
        }
        else {
            sp++;
            st -= 2;
        }
        console.log();
    }
}

printPattern(7);