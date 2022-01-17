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

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Pair{
    constructor(node,state){
        this.node=node;
        this.state=state;
    }
}

function construct(arr){
    let root=new Node(arr[0]);
    //console.log(root);
    let rootP=new Pair(root,1);
    //console.log(rootP);

    let stack=new Stack();
    stack.push(rootP);

    let idx=1;
    while(stack.size()>0){
        let topPair=stack.peek();

        if(topPair.state==1){
            if(arr[idx]!=null){
                let leftChild=new Node(arr[idx]);
                topPair.node.left=leftChild;

                let leftChildPair=new Pair(leftChild,1);
                stack.push(leftChildPair);
            }
            topPair.state++;
            ++idx;
        }
        else if(topPair.state==2){
            if(arr[idx]!=null){
                let rightChild=new Node(arr[idx]);
                topPair.node.right=rightChild;

                let rightChildPair=new Pair(rightChild,1);
                stack.push(rightChildPair);
            }
            topPair.state++;
            ++idx;
        }
        else{
            stack.pop();
        }

    }

    return root;
}

function display(node){
    if(node==null)
        return;

    let str="<-"+node.data+"->";
    let leftChild=node.left==null?".":node.left.data+"";
    let rightChild=node.right==null?".":node.right.data+"";

    console.log(leftChild+str+rightChild);

    display(node.left);
    display(node.right);
}

let root = construct([50, 25, 12, null, null, 37, 30, null, null, null, 75, 62, null, 70, null, null, 87, null, null]);

display(root);