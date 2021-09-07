
class Stack{
    stackArray=[];
    top;

    constructor(){
        this.top=-1;
    }
    push(ele){
        this.stackArray.push(ele);
        ++this.top;
    }

    pop(){
        let ele = this.stackArray.pop();
        --this.top;
        return ele;
    }

    peek(){
        return this.stackArray[this.top];
    }

    isEmpty(){
        return this.top==-1;
    }

}


let stack1=new Stack();
stack1.push(1);
stack1.push(2);
while(!stack1.isEmpty()){
    console.log(stack1.pop(),' ');
}
stack1.push(3);
while(!stack1.isEmpty()){
    console.log(stack1.pop(),' ');
}