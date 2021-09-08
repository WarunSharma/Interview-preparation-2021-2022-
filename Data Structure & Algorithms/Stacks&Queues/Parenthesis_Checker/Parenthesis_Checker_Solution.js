
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

function isPar(str){
    let stack=new Stack();
    for(let i=0;i<str.length;++i){
        if(str[i]==='{' || str[i]==='[' || str[i]==='('){
            stack.push(str[i]);
        }
        else{
            if(stack.isEmpty()){
                return false;
            }
            else{
                if(str[i]=='}' && stack.peek()=='{'){
                    stack.pop();
                }
                else if(str[i]==']' && stack.peek()=='['){
                    stack.pop();
                }
                else if(str[i]==')' && stack.peek()=='('){
                    stack.pop();
                }
                else{
                    return false;
                }
            }
        }
    }

    if(stack.isEmpty()){
        return true;
    }
    else{
        return false;
    }

}

console.log('Testcase 1');
console.log(isPar("{([])}"));

console.log('Testcase 2');
console.log(isPar("()"));

console.log('Testcase 3');
console.log(isPar("([]"));

console.log('Testcase 4');
console.log(isPar("(]"));
