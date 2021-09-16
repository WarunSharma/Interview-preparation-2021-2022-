
/**
 * Two Stacks 
 * in an array
 */

class TwoStack {
    top1;
    top2;
    size;

    //Initialize top of stack1, stack2 and array
    constructor(size) {
        this.top1 = -1;
        this.top2 = size;
        this.size = size;
        this.stackArray = new Array(size);
    }

    isEmpty1() {
        return this.top1 == -1;
    }

    isEmpty2() {
        return this.top2 == this.size;
    }

    //Method to push an element ele in stack1
    push1(ele) {
        this.stackArray[++this.top1] = ele;
    }

    //Method to push an element ele in stack1
    push2(ele) {
        this.stackArray[--this.top2] = ele;
    }

    //Method to pop an element from stack1
    pop1() {
        if (!this.isEmpty1()) {
            let temp = this.stackArray[this.top1];
            this.stackArray.splice(this.top1, 1);
            --this.top1;
            return temp;
        }
        else {
            return -1;
        }
    }

    //Method to pop an element from stack2
    pop2() {
        if (!this.isEmpty2()) {
            let temp = this.stackArray[this.top2];
            this.stackArray.splice(this.top2, 1);
            ++this.top2;
            return temp;
        }
        else {
            return -1;
        }

    }

    show() {
        console.log(this.stackArray);
    }


}

let stack1 = new TwoStack(10);
stack1.push1(1);
stack1.push1(2);
console.log(stack1.pop1());

console.log(stack1.pop2());
stack1.push2(10);
stack1.push2(9);
console.log(stack1.pop2());
stack1.show();