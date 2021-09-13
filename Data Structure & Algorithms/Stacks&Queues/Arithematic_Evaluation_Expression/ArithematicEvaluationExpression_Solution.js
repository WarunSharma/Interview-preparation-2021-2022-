
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

function precedence(operator){
    if(operator==='+'){
        return 1;
    }
    else if(operator==='-'){
        return 1;
    }
    else if(operator==='*'){
        return 2;
    }
    else{
        return 2;
    }
}

function evaluate(operand1,operand2,operator){
    if(operator==='+'){
        return operand1+operand2;
    }
    else if(operator==='-'){
        return operand1-operand2;
    }
    else if(operator==='*'){
        return operand1*operand2;
    }
    else{
        return operand1/operand2;
    }
}

function arithematicEvaluation(str){
    let operandStack=new Stack();
    let operatorStack=new Stack();

    for(let i=0;i<str.length;++i){
        if(str[i]=='('){
            operatorStack.push(str[i]);
        }
        else if(str[i]==='0' || str[i]==='1' || str[i]==='2' || str[i]==='3' || str[i]==='4' || str[i]==='5' ||str[i]==='6' ||str[i]==='7' ||str[i]==='8' ||str[i]==='9'){
            operandStack.push(parseInt(str[i]));
        }
        else if(str[i]===')'){
            while(operatorStack.peek()!='('){
                let val2=operandStack.pop();
                let val1=operandStack.pop();
                let operator=operatorStack.pop();

                let result=evaluate(val1,val2,operator);
                operandStack.push(result);
            }

            operatorStack.pop();
        }
        else{
            while(!operatorStack.isEmpty() && operatorStack.peek()!='(' && precedence(str[i])<=precedence(operatorStack.peek())){
                let val2=operandStack.pop();
                let val1=operandStack.pop();
                let operator=operatorStack.pop();

                let result=evaluate(val1,val2,operator);
                operatorStack.push(result);
            }

            operatorStack.push(str[i]);
        }
    }

    while(!operatorStack.isEmpty()){
        let val2=operandStack.pop();
        let val1=operandStack.pop();
        let operator=operatorStack.pop();

        let result=evaluate(val1,val2,operator);
        operandStack.push(result);
    }

    return operandStack.peek();
}

console.log('Testcase 1');
console.log(arithematicEvaluation('(2+4)*(4+6)'));