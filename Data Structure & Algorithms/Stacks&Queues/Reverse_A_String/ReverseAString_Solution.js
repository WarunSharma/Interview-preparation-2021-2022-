
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

function reverseString(str) {
    let stack = new Stack();
    let temp = "";

    for (let i = 0; i < str.length; ++i) {
        stack.push(str[i]);
    }

    for (let i = str.length - 1; i >= 0; --i) {
        temp += stack.pop();
    }

    str = temp;

    return str;

}


console.log('Testcase 1');
console.log(reverseString("GeeksforGeeks"));