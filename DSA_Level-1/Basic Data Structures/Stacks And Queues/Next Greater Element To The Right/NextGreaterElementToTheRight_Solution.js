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

function nextGreaterElement(arr){
    let nge=new Array(arr.length);
    let st=new Stack();

    nge[arr.length-1]=-1;
    st.push(arr[arr.length-1]);

    for(let i=arr.length-2;i>=0;--i){
        while(st.size()>0 && arr[i]>st.peek()){
            st.pop();
        }

        if(st.size()==0){
            nge[i]=-1;
        }
        else{
            nge[i]=st.peek();
        }
        st.push(arr[i]);
    }

    return nge;
}

console.log(nextGreaterElement([5,3,8,-2,7]));