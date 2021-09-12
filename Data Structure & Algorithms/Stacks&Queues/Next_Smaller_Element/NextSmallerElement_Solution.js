
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

function nextSmallerElement(arr){
    let n=arr.length;
    let result=new Array(n).fill(-1);
    let stack=new Stack();

    for(let i=0;i<n;++i){
        if(stack.isEmpty() || arr[stack.peek()]<=arr[i]){
            stack.push(i);
        }
        else{
            while(!stack.isEmpty() && arr[stack.peek()]>arr[i]){
                result[stack.pop()]=arr[i];
            }

            stack.push(i);
        }
    }

    return result;
}

console.log('Testcase 1');
console.log(nextSmallerElement([4,8,5,2,25]));

console.log('Testcase 2');
console.log(nextSmallerElement([13, 7, 6, 12]));