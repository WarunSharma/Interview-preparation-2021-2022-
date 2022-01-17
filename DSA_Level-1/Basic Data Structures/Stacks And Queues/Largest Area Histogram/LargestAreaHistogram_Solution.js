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

function largestAreaHistogram(arr){
    let rb=new Array(arr.length);
    let lb=new Array(arr.length);
    let st=new Stack();
    lb[0]=-1;
    st.push(0);

    for(let i=1;i<arr.length;++i){
        while(st.size()>0 && arr[i]<=arr[st.peek()]){
            st.pop();
        }

        if(st.size()==0){
            lb[i]=-1;
        }
        else{
            lb[i]=st.peek();
        }

        st.push(i);
    }

    st=new Stack();
    rb[arr.length-1]=arr.length;
    st.push(arr.length-1);

    for(let i=arr.length-2;i>=0;--i){
        while(st.size()>0 && arr[i]<=arr[st.peek()]){
            st.pop();
        }

        if(st.size()==0){
            rb[i]=arr.length;
        }
        else{
            rb[i]=st.peek();
        }

        st.push(i);
    }

    let maxArea=0;

    for(let i=0;i<arr.length;++i){
        let width=rb[i]-lb[i]-1;
        let area=arr[i]*width;

        if(area>maxArea){
            maxArea=area;
        }
    }

    console.log(maxArea);
}

largestAreaHistogram([6,2,5,4,5,1,6]);