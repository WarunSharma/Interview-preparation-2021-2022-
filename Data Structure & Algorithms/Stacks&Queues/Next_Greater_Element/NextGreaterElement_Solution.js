
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

function nextGreaterElement(arr){
    let n=arr.length;
    let result=new Array(n).fill(-1);
    let stack=new Stack();

    for(let i=0;i<n;++i){
        while(!stack.isEmpty() && arr[stack.peek()]<arr[i]){
            result[stack.peek()]=arr[i];
            stack.pop();
        }

        stack.push(i);
    }

    return result;

}

console.log('Testcase 1')
console.log(nextGreaterElement([1,3,2,4]));

console.log('Testcase 2')
console.log(nextGreaterElement([6,8,0,1,3]));