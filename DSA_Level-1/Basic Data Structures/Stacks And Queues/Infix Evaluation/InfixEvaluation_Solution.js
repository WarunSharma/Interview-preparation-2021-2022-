
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

function processInfix(operandStack,operatorStack){
    let op=operatorStack.pop();
    let v2=operandStack.pop();
    let v1=operandStack.pop();
    console.log(`${v1}${op}${v2}`);
    if(op=="+"){
        return v1+v2;
    }
    else if(op=="-"){
        return v1-v2;
    }
    else if(op=="*"){
        return v1*v2;
    }
    else{
        return v1/v2;
    }

}

function infixConversion(str){
    let operandStack=new Stack();
    let operatorStack=new Stack();
    let sum=0;
    for(let i=0;i<str.length;++i){
        if(str[i]=="("){
            operatorStack.push(str[i]);
        }
        else if(str[i]=="0" || str[i]=="1" || str[i]=="2" || str[i]=="3" || str[i]=="4" || str[i]=="5" 
        || str[i]=="6" || str[i]=="7" || str[i]=="8" || str[i]=="9"){
            operandStack.push(Number.parseInt(str[i]));
        }
        else if(str[i]==")"){
            while(operatorStack.size()>0 && operatorStack.peek()!="("){
                let ans=processInfix(operandStack,operatorStack);
                //console.log(ans);
                operandStack.push(ans);
            }
            operatorStack.pop();
        }
        else if(str[i]=="+" || str[i]=="-" || str[i]=="*" || str[i]=="/"){
            while(operatorStack.size()>0 && operatorStack.peek()!="(" && precedence(str[i])<=precedence(operatorStack.peek())){
                let ans=processInfix(operandStack,operatorStack);
                //console.log(ans);
                operandStack.push(ans);
            }
            operatorStack.push(str[i]);
        }
        else{

        }
    }
    
    while(operandStack.size()>1){
        let ans=processInfix(operandStack,operatorStack);
        operandStack.push(ans);
    }

    console.log(operandStack.peek());
}

infixConversion("1+2*3/3");
infixConversion("(6-(2+1)/3)*4");