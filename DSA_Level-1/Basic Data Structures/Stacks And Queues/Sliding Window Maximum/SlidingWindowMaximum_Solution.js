
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

function slidingWindowMaximum(arr,k){
    let nge=new Array(arr.length);
    nge[arr.length-1]=arr.length;

    let st=new Stack();
    st.push(arr[arr.length-1]);
    for(let i=arr.length-2;i>=0;--i){
        while(st.size()>0 && arr[st.peek()]<=arr[i]){
            st.pop();
        }

        if(st.size()==0){
            nge[i]=arr.length;
        }
        else{
            nge[i]=st.peek();
        }

        st.push(i);
    }

    // console.log(nge);

    // for(let i=0;i<arr.length;++i){
    //     console.log(arr[i]+":"+arr[nge[i]]);
    // }

    let ans=new Array(arr.length-k);
    let j=0;
    for(let i=0;i<=arr.length-k;++i){
        if(j<i){
            j=i;
        }
        while(nge[j]<i+k){
            j=nge[j];
        }
        ans[i]=arr[j];
    }    

    return ans;
}

console.log(slidingWindowMaximum([2, 9, 3, 8, 1, 7, 12, 6, 14, 4, 32, 0, 7, 19, 8, 12, 6],4));