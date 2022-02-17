
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

function precedence(ch){
    if(ch=="+" || ch=="-"){
        return 1;
    }
    else if(ch=="*" || ch=="/"){
        return 2;
    }
    else{
        return 0;
    }
}

function processInfix(operatorStack,prefixStack,postfixStack){
    // console.log(operatorStack);
    // console.log(prefixStack);
    // console.log(postfixStack);
    // console.log();
    let op=operatorStack.pop();
    let v2=prefixStack.pop();
    let v1=prefixStack.pop();
    
    prefixStack.push(""+op+v1+v2);
    v2=postfixStack.pop();
    v1=postfixStack.pop();
    postfixStack.push(""+v1+v2+op);

}

function infixConversion(str){
    let operatorStack=new Stack();
    let prefixStack=new Stack();
    let postfixStack=new Stack();
    let sum=0;
    for(let i=0;i<str.length;++i){
        let ch=str[i];
        if(ch=="("){
            operatorStack.push(ch);
        }
        else if((ch>='0' && ch<='9') || (ch>='a' && ch<='z') || (ch>='A' && ch<='Z')){
            prefixStack.push(ch);
            postfixStack.push(ch);
        }
        else if(ch==")"){
            while(operatorStack.size()>0 && operatorStack.peek()!="("){
                processInfix(operatorStack,prefixStack,postfixStack);
            }
            operatorStack.pop();
        }
        else if(ch=="+" || ch=="-" || ch=="*" || ch=="/"){
            while(operatorStack.size()>0 && operatorStack.peek()!="(" && precedence(ch)<=precedence(operatorStack.peek())){
                processInfix(operatorStack,prefixStack,postfixStack);
            }
            operatorStack.push(ch);
        }
        else{

        }
    }
    
    while(operatorStack.size()>0){
        processInfix(operatorStack,prefixStack,postfixStack);
    }

    console.log(postfixStack.peek());
    console.log(prefixStack.peek());
}

infixConversion("1+2*3/3");
console.log();
infixConversion("a*(b-c+d)/e");