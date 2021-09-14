
/**
 * Stack Implementation using
 * an array
 */

class Stack {

    //Initialize an Array for storage of a stack
    stackArray = [];
    top;

    //Initialize top
    constructor() {
        this.top = -1;
    }

    //Push an element in O(1)
    push(ele) {
        this.stackArray.push(ele);
        ++this.top;
    }

    //Pop an element in O(1)
    pop() {
        let ele = this.stackArray.pop();
        --this.top;
        return ele;
    }

    //Get peek element in O(1)
    peek() {
        return this.stackArray[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }

}


let stack1 = new Stack();

stack1.push(1);
stack1.push(2);

while (!stack1.isEmpty()) {
    console.log(stack1.pop());
}


stack1.push(3);

while (!stack1.isEmpty()) {
    console.log(stack1.pop());
}