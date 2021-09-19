
function printPattern(num) {
    let st = num / 2, sp = 1;
    for (let i = 1; i <= num; ++i) {
        process.stdout.write("*	");

        for (let j = 1; j <= st; ++j) {
            process.stdout.write("*	");
        }

        for (let j = 1; j <= sp; ++j) {
            process.stdout.write("	");
        }

        for (let j = 1; j <= st; ++j) {
            process.stdout.write("*	");
        }

        process.stdout.write("*	");
        console.log("");

        if (i <= num / 2) {
            sp += 2;
            st--;
        }
        else {
            sp -= 2;
            st++;
        }
    }
}

printPattern(5)