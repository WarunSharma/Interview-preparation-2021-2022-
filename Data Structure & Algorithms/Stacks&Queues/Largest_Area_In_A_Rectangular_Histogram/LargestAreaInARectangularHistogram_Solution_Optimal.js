
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

function largestArea(arr){
    let maxArea=0;
    let stack=new Stack();
    
    let i=0;
    let width=0;
    while(i<arr.length){
        if(stack.isEmpty() || arr[stack.peek()]<=arr[i]){
            stack.push(i++);
        }
        else{
            let tp=stack.peek();
            stack.pop();
            width=stack.isEmpty()?i:i-stack.peek()-1;
            let ans=arr[tp]*width;
            maxArea=Math.max(ans,maxArea);
        }
    }

    while(!stack.isEmpty()){
            let tp=stack.peek();
            stack.pop();
            width=stack.isEmpty()?i:i-stack.peek()-1;
            let ans=arr[tp]*width;
            maxArea=Math.max(ans,maxArea);
    }

    return maxArea;
}

console.log('Testcase 1');
console.log(largestArea([7,2,8,9,1,3,6,5]));