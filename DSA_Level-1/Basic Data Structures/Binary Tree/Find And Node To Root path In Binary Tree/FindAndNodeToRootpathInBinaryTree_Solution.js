class Queue{
    arr=new Array();
    addLast(node){
        this.arr.push(node);
    }
    removeFirst(){
        let top=this.arr[0];
        this.arr=this.arr.slice(1);
        return top;
    }
    size(){
        return this.arr.length;
    }
    display(){
        console.log(this.arr);
    }

}

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

function size(node){
    if(node==null){
        return 0;
    }
    return 1+size(node.left)+size(node.right);
}

function sum(node){
    if(node==null){
        return 0;
    }
    return node.data+sum(node.left)+sum(node.right);
}

function height(node){
    if(node==null){
        return -1;
    }

    return 1+Math.max(height(node.left),height(node.right));
}

function max(node){
    if(node==null){
        return Number.MIN_SAFE_INTEGER;
    }

    return Math.max(node.data,Math.max(max(node.left),max(node.right)));
}

function preorder(node){

    if(node==null){
        return;
    }

    console.log(node.data);
    preorder(node.left);
    preorder(node.right);
}

function inorder(node){

    if(node==null){
        return;
    }

    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
}

function postorder(node){

    if(node==null){
        return;
    }

    postorder(node.left);
    postorder(node.right);
    console.log(node.data);
}

function levelorder(node){
    let queue=new Queue();
    queue.addLast(node);

    while(queue.size()>0){
        let size=queue.size();
        while(size--){
            let top=queue.removeFirst();
            process.stdout.write(top.data+" ");
            if(top.left){
                queue.addLast(top.left);
            }
            if(top.right){
                queue.addLast(top.right);
            }
        }
        console.log();
    }
}

function iterativePrePostInTraversal(node){
    let stack=new Stack();
    let rootPair=new Pair(node,1);
    stack.push(rootPair);
    // console.log(rootPair);

    let preorder="";
    let inorder="";
    let postorder="";

    while(stack.size()>0){
        let topPair=stack.peek();
        //console.log(topPair.node.data);

        if(topPair.state==1){
            preorder+=topPair.node.data+" ";
            topPair.state++;
            if(topPair.node.left){
                let leftPair=new Pair(topPair.node.left,1);
                stack.push(leftPair);
            }
        }
        else if(topPair.state==2){
            inorder+=topPair.node.data+" ";
            topPair.state++;
            if(topPair.node.right){
                let rightPair=new Pair(topPair.node.right,1);
                stack.push(rightPair);
            }
        }
        else{
            postorder+=topPair.node.data+" ";
            stack.pop();
        }
    }

    console.log("Preorder: ",preorder);
    console.log("Inorder: ",inorder);
    console.log("Postorder: ",postorder);
}

function find(node,data){
    if(node.data==data){
        return true;
    }
}

function nodeToRootPath(node,data){
    let result=[];
    if(find(node,data)){
        let baseResult=[];
        baseResult.push(node.data);
        return baseResult;
    }
        
    let leftRoute=[];    
    if(node.left)
        leftRoute=nodeToRootPath(node.left,data);
    let rightRoute=[];
    if(node.right)
        rightRoute=nodeToRootPath(node.right,data);

    if(leftRoute.length>0){
        leftRoute.push(node.data);
        return leftRoute;
    }

    if(rightRoute.length>0){
        rightRoute.push(node.data);
        return rightRoute;
    }

    return [];
}

let root = construct([50, 25, 12, null, null, 37, 30, null, null, null, 75, 62, null, 70, null, null, 87, null, null]);

// display(root);

// console.log(size(root));
// console.log(sum(root));
// console.log(height(root));
// console.log(max(root));

// preorder(root);
// console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// inorder(root);
// console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// postorder(root);

// levelorder(root);

// iterativePrePostInTraversal(root);
console.log(nodeToRootPath(root,62));