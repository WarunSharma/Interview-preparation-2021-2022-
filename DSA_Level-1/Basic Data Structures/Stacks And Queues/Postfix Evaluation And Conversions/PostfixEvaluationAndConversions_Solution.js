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

function process(v1,v2,op){
    //console.log(`${v1}${op}${v2}`);
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

function postfixEvaluationAndConversion(str){
    let valueStack=new Stack();
    let infixStack=new Stack();
    let prefixStack=new Stack();
    for(let i=0;i<str.length;++i){
        let ch=str[i];
        if(ch=='+' || ch=='-' || ch=='*' || ch=='/'){
            let val2=valueStack.pop();
            let val1=valueStack.pop();
            let ans=process(val1,val2,ch);
            valueStack.push(ans);

            val2=infixStack.pop();
            val1=infixStack.pop();
            ans=`(${val1}${ch}${val2})`;
            infixStack.push(ans);

            val2=prefixStack.pop();
            val1=prefixStack.pop();
            ans=`${ch}${val1}${val2}`;
            prefixStack.push(ans);
        }
        else{
            valueStack.push(Number.parseInt(ch));
            infixStack.push(ch);
            prefixStack.push(ch);
        }
    }

    console.log(valueStack.peek());
    console.log(infixStack.peek());
    console.log(prefixStack.peek());
}


postfixEvaluationAndConversion("264*8/+3-");