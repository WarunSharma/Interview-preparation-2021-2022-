class Stack{
    constructor(){
        this.arr=[];
    }

    push(ch){
        this.arr.push(ch);
    }

    pop(){
        return this.arr.pop();
    }

    size(){
        return this.arr.length;
    }

    peek(){
        return this.arr[this.arr.length-1];
    }
}

class MinimumStack extends Stack{

    constructor(){
        super();
        this.dataStack=new Stack();
        this.minStack=new Stack();
    }

    size(){
        return this.dataStack.size();
    }

    push(val){
        if(this.size()==0){
            this.minStack.push(val);
        }
        else{
            if(this.minStack.peek()>val){
                this.minStack.push(val);
            }
        }
        this.dataStack.push(val);

    }

    pop(){
        if(this.size()==0){
            console.log("Stack underflow");
            return -1;
        }
        if(this.dataStack.peek()==this.minStack.peek()){
            this.minStack.pop();
        }

        return this.dataStack.pop();
    }

    min(){
        if(this.size()==0){
            console.log("Stack underflow");
            return -1;
        }

        return this.minStack.peek();
    }

    peek(){
        if(this.size()==0){
            console.log("Stack underflow");
            return -1;
        }

        return this.dataStack.peek();
    }
}

let min=new MinimumStack();
min.push(10);
min.push(20);
min.push(5);
min.push(8);
min.push(2);
min.push(4);
min.push(11);
console.log(min.peek());
console.log(min.min());
console.log(min.pop());
console.log(min.peek());
console.log(min.min());
console.log(min.pop());
console.log(min.peek());
console.log(min.min());
console.log(min.pop());
console.log(min.peek());
console.log(min.min());
console.log(min.pop());
console.log(min.peek());
console.log(min.min());
console.log(min.pop());
console.log(min.peek());
console.log(min.min());
console.log(min.pop());
console.log(min.peek());
console.log(min.min());
console.log(min.pop());
