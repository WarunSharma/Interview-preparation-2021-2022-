
class Node{
    constructor(data,left,right){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class Pair{
    constructor(node,state){
        this.node=node;
        this.state=state;
    }
}

class Stack{

    arr=[];

    push(data){
        this.arr.push(data);
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

function constructor(arr){
    let idx=0
    let root=new Node(arr[idx],null,null);
    let rootPair=new Pair(root,1);
    let st=new Stack();

    st.push(rootPair);
    idx++;
    while(st.size()>0){
        let topPair=st.peek();
        if(topPair.state==1){
            if(arr[idx]!=null){
                let leftNode=new Node(arr[idx],null,null);
                let leftPair=new Pair(leftNode,1);
                topPair.node.left=leftNode;
                topPair.state++;
                st.push(leftPair);
            }
            else{
                topPair.node.left=null;
                topPair.state++;
            }
            ++idx;
        }
        else if(topPair.state==2){
            if(arr[idx]!=null){
                let rightNode=new Node(arr[idx],null,null);
                let rightPair=new Pair(rightNode,1);
                topPair.node.right=rightNode;
                topPair.state++;
                st.push(rightPair);
            }
            else{
                topPair.node.right=null;
                topPair.state++;
            }
            ++idx;
        }
        else{
            st.pop();
        }
    }

    return root;
}

function display(node){
    if(node==null){
        return;
    }
    console.log(node.data);
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

function min(node){

    if(node==null){
        return Number.MAX_SAFE_INTEGER;
    }

    return Math.min(node.data,min(node.left));

}

function max(node){

    if(node==null){
        return Number.MIN_SAFE_INTEGER;
    }

    return Math.max(node.data,max(node.right));
}

function find(node,data){

    if(node==null){
        return false;
    }

    if(node.data==data){
        return true;
    }
    else if(node.data>data){
        return find(node.left,data);
    }
    else{
        return find(node.right,data);
    }
}

let sumSoFar=0;
function rwsol(node){
    
    if(node==null){
        return;
    }

    rwsol(node.right);
    let osum=sumSoFar;
    sumSoFar+=node.data;
    node.data=osum;

    rwsol(node.left);
}

let root=constructor([50, 25, 12, null, null, 37, 30, null, null, null, 75, 62, null, 70, null, null, 87, null, null]);
display(root);
// console.log('SIZE: ',size(root));
// console.log('SUM: ',sum(root));
// console.log('MIN:', min(root));
// console.log('MAX: ',max(root));
// console.log('FIND: ',find(root,87));
rwsol(root);
console.log('----------------');
display(root);
