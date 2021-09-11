
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

function mergeOverlappingIntervals(arr){

    let result=[];
    arr.sort((a,b)=>a[0]-b[0]);
    let stack=new Stack();

    for(let i=0;i<arr.length;++i){
        if(stack.isEmpty()){
            stack.push(arr[i]);
        }
        else{
            let top=stack.peek();
            if(top[1]>=arr[i][0]){
                stack.pop();
                top[1]=Math.max(top[1],arr[i][1]);
                stack.push(top);
            }
            else{
                stack.push(arr[i]);
            }
        }
    }

    while(!stack.isEmpty()){
        result.push(stack.pop());
    }

    return result.reverse();

}

console.log('Testcase 1');
console.log(mergeOverlappingIntervals([[1,3], [5,7], [2,4], [6,8]]));

console.log('Testcase 2');
console.log(mergeOverlappingIntervals([[1,3], [8,10], [5,6]]));