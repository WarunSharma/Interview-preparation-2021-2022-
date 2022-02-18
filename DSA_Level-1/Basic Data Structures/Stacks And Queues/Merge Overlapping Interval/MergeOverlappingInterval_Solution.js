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

function mergeOverlapping(arr){
    let st=new Stack();
    let res=[];
    arr.sort((a,b)=>{
        if(a[0]!=b[0]){
            return a[0]-b[0];
        }
        else{
            return a[1]-b[0];
        }
    })

    // console.log(arr);

    for(let a of arr){
        let top=st.peek();
        if(st.size()!=0 && top[1]>=a[0]){
            top[1]=Math.max(top[1],a[1]);
        }
        else{
            st.push(a);
        }
    }

    while(st.size()>0){
        res.push(st.pop());
    }

    return res.reverse();
}


console.log(mergeOverlapping([[22, 28], [1, 8], [25, 27], [14, 19], [27, 30], [5, 12]]));