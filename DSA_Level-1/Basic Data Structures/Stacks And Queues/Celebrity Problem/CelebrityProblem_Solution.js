
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

function celebrityProblem(arr){
    let st=new Stack();

    for(let i=0; i<arr.length;++i){
        st.push(i);
    }

    while(st.size()>1){
        let first=st.pop();
        let second=st.pop();

        if(arr[first][second]==1){
            st.push(second);
        }
        else{
            st.push(first);
        }
    }

    let potentialCelebrity=st.pop();
    let flag=true;

    for(let i=0;i<arr.length;++i){
        if(i==potentialCelebrity){
            continue;
        }

        if(arr[i][potentialCelebrity]!=1 || arr[potentialCelebrity][i]!=0){
            flag=false
        }

    }

    if(flag){
        console.log(potentialCelebrity);
    }
    else{
        console.log("none");
    }
}

celebrityProblem([[0,0,0,0]
    ,[1,0,1,1]
    ,[1,1,0,1]
    ,[1,1,1,0]]);

celebrityProblem([[0,0,1,0]
    ,[1,0,1,1]
    ,[1,1,0,1]
    ,[1,1,1,0]]);    