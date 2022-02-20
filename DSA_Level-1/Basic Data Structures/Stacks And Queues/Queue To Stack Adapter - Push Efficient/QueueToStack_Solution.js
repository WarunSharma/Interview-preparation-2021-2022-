class Queue{
    arr=new Array();
    addLast(node){
        this.arr.push(node);
    }
    removeFirst(){
        let top=this.arr[0];
        this.arr=this.arr.slice(1);
        return top;
    }
    size(){
        return this.arr.length;
    }
    display(){
        console.log(this.arr);
    }
}

// class Stack{
//     constructor(){
//         this.arr=[];
//     }

//     push(ch){
//         this.arr.push(ch);
//     }

//     pop(){
//         return this.arr.pop();
//     }

//     size(){
//         return this.arr.length;
//     }

//     peek(){
//         return this.arr[this.arr.length-1];
//     }
// }

class StackQueue{

    constructor(){
        this.mainQueue=new Queue();
        this.helperQueue=new Queue();
    }

    push(val){
        this.mainQueue.addLast(val);
    }

    size(){
        return this.mainQueue.size();
    }

    pop(){
        if(this.size==0){
            console.log("Stack underflow");
            return -1;
        }
        else{
            while(this.size()>1){
                this.helperQueue.addLast(this.mainQueue.removeFirst());
            }

            let val=this.mainQueue.removeFirst();

            let tempQueue=this.helperQueue;
            this.helperQueue=this.mainQueue;
            this.mainQueue=tempQueue;

            return val;
        }
    }

    top(){
        if(this.size==0){
            console.log("Stack underflow");
            return -1;
        }
        else{
            while(this.size()>1){
                this.helperQueue.addLast(this.mainQueue.removeFirst());
            }

            let val=this.mainQueue.removeFirst();
            this.helperQueue.addLast(val);
            let tempQueue=this.helperQueue;
            this.helperQueue=this.mainQueue;
            this.mainQueue=tempQueue;

            return val;
        }
    }
}

let min=new StackQueue();
min.push(10);
min.push(20);
min.push(5);
min.push(8);
min.push(2);
min.push(4);
min.push(11);
console.log(min.top());
console.log(min.size());
console.log(min.pop());
console.log(min.top());
console.log(min.size());
console.log(min.pop());
console.log(min.top());
console.log(min.size());
console.log(min.pop());
console.log(min.top());
console.log(min.size());
console.log(min.pop());
console.log(min.top());
console.log(min.size());
console.log(min.pop());
console.log(min.top());
console.log(min.size());
console.log(min.pop());
console.log(min.top());
console.log(min.size());
console.log(min.pop());
