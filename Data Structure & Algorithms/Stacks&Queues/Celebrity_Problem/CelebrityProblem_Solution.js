
class Stack {
    stackArray = [];
    top;

    constructor() {
        this.top = -1;
    }
    push(ele) {
        this.stackArray.push(ele);
        ++this.top;
    }

    pop() {
        let ele = this.stackArray.pop();
        --this.top;
        return ele;
    }

    peek() {
        return this.stackArray[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }

}

function celebrityCheck(arr) {
    let stack = new Stack();

    //Insert array indexes in stack
    for (let i = 0; i < arr.length; ++i) {
        stack.push(i);
    }

    while (stack.top >= 1) {

        //Pop top two elements for comparision
        let i = stack.pop();
        let j = stack.pop();

        //If ith person knows jth person
        if (arr[i][j]) {
            stack.push(j);
        }
        else {
            stack.push(i);
        }

    }

    //Top element of stack is the potential celebrity
    let potentialCelebrity = stack.pop();

    for (let i = 0; i < arr.length; ++i) {
        if (i != potentialCelebrity) {
            // If ith element doesn't know potentialCelebrity or potentialCelebrity knows ith element means there is no celebrity.
            if (arr[i][potentialCelebrity] == 0 || arr[potentialCelebrity][i] == 1) {
                return -1;
            }
        }
    }

    return potentialCelebrity;
}


console.log('Testcase 1');
console.log(celebrityCheck([[0, 1, 0],
[0, 0, 0],
[0, 1, 0]]));

console.log('Testcase 2');
console.log(celebrityCheck([[0, 1],
[1, 0]]));