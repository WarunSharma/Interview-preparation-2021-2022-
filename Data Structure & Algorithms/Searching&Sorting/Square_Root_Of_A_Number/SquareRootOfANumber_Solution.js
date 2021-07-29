
/*
* Time Complexity: O(log(n))
* Space Complexity: O(1)
*
* @param num Given number for square root
* @param precision precision in square root
* @returns square root
*
*/

function squareRoot(num, precision) {

    // Base cases
    if (num == 0 || num == 1) {
        return num
    }

    let low = 0, high = num;

    // Do Binary Search for floor(sqrt(x))
    while (high - low > precision) {
        let mid = (low + high) / 2;
        if (mid * mid > num) {
            high = mid;
        }
        else {
            low = mid;
        }
    }
    return low;
}

console.log('Testcase1');
console.log(squareRoot(50, 1));

console.log('Testcase2');
console.log(squareRoot(50, 0.1));

console.log('Testcase3');
console.log(squareRoot(49, 1));

console.log('Testcase4');
console.log(squareRoot(18982, 0.001));