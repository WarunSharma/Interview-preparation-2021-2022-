
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

let root=constructor([50, 25, 12, null, null, 37, 30, null, null, null, 75, 62, null, 70, null, null, 87, null, null]);
display(root);