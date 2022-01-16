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

function stockSpan(arr){
    let span=new Array(arr.length);
    let st=new Stack();

    st.push(0);
    span[0]=1;

    for(let i=1;i<arr.length;++i){
        while(st.size()>0 && arr[i]>arr[st.peek()]){
            st.pop();
        }

        if(st.size()==0){
            span[i]=i+1;
        }
        else{
            span[i]=i-st.peek();
        }

        st.push(i);
    }

    return span;
}

console.log(stockSpan([2,5,9,3,1,12,6,8,7]));