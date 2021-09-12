
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

function celebrityCheck(arr){
    let stack=new Stack();

    for(let i=0;i<arr.length;++i){
        stack.push(i);
    }

    while(stack.top>=1){
        let i=stack.pop();
        let j=stack.pop();

        if(arr[i][j]){
            stack.push(j);
        }
        else{
            stack.push(i);
        }

    }

    let potentialCelebrity=stack.pop();

    for(let i=0;i<arr.length;++i){
        if(i!=potentialCelebrity){
            if(arr[i][potentialCelebrity]==0 || arr[potentialCelebrity][i]==1){
                return -1;
            }
        }
    }

    return potentialCelebrity;
}


console.log('Testcase 1');
console.log(celebrityCheck([[0,1,0],
    [0,0,0], 
    [0,1,0]]));

console.log('Testcase 2');
console.log(celebrityCheck([[0,1],
    [1,0]]));    