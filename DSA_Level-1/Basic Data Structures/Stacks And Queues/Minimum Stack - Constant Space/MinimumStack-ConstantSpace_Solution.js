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
        this.minVal;
    }

    size(){
        if(this.dataStack.size()==0){
            console.log("Stack underflow");
            return -1;
        }
        return this.dataStack.size();
    }

    push(val){
        if(this.dataStack.size()==0){
            this.minVal=val;
            this.dataStack.push(val);
        }
        else{
            if(val<this.minVal){
                this.dataStack.push(val+val-this.minVal);
                this.minVal=val;
            }
            else{
                this.dataStack.push(val);
            }
        }
    }

    pop(){
        if(this.dataStack.size()==0){
            console.log("Stack underflow");
            return -1;
        }
        else{
            if(this.dataStack.peek()<this.minVal){
                let orgVal=this.minVal;
                this.minVal=(2*this.minVal)-this.dataStack.pop();
                return orgVal;
            }
            else{
                return this.dataStack.pop();
            }
        }
    }

    min(){
        if(this.dataStack.size()==0){
            console.log("Stack underflow");
            return -1;
        }
        return this.minVal;
    }

    peek(){
        if(this.dataStack.size()==0){
            console.log("Stack underflow");
            return -1;
        }
        else{
            if(this.dataStack.peek()>=this.minVal){
                return this.dataStack.peek();
            }
            else{
                return this.minVal;
            }
        }
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
