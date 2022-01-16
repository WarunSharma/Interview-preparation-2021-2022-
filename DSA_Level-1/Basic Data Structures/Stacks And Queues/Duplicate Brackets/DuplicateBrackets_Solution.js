
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


function run(str){
    let st=new Stack();
    for(let i=0;i<str.length;++i){
        if(str[i]==')'){
            if(st.peek()=='('){
                console.log('true');
                return;
            }
            else{
                while(st.peek()!='('){
                    st.pop();
                }
                st.pop();
            }
        }
        else{
            st.push(str[i]);
        }
    }
    console.log('false');
}

run("((a + b) + (c + d))");
run("(a + b) + ((c + d))");