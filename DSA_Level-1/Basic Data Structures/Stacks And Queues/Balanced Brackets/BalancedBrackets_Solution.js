class Stack{
    constructor(){
        this.arr=[];
    }

    push(ch){
        this.arr.push(ch);
    }

    pop(){
        this.arr.pop();
    }

    size(){
        return this.arr.length;
    }

    peek(){
        return this.arr[this.arr.length-1];
    }
}

function balancedParenthesis(str){
    let st=new Stack();
        for(let i=0;i<str.length;++i){
            let ch=str[i];
            if(ch=='(' || ch=='{' || ch=='['){
                st.push(ch);
            }
            else if(ch==')' || ch=='}' || ch==']'){
                let val=handleCasing(ch,st);
                if(val==true){
                    st.pop();
                }
                else{
                    console.log("false");
                    return;
                }
            }
        }
        
        if(st.size()==0){
            console.log("true");
        }
        else{
            console.log("false");
        }
}

function handleCasing(ch, st){
    //System.out.println(ch);
    if(st.size()==0){
        return false;
    }
    else{
        if(ch==')' && st.peek()=='('){
            return true;
        }
        else if(ch==']' && st.peek()=='['){
            return true;
        }
        else if(ch=='}' && st.peek()=='{'){
            return true;
        }
        else{
            return false;
        }
    }
}

balancedParenthesis("[(a + b) + {(c + d) * (e / f)}]");
balancedParenthesis("[(a + b) + {(c + d) * (e / f)]}");