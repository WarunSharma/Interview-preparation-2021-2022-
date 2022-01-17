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
    data;
    children=new Array();
}

function display(root){
    process.stdout.write(root.data+" -> ");
    
    let str="";
    for(let child of root.children){
        str+=child.data+",";
    }
    process.stdout.write(str);
    console.log();

    for(let child of root.children){
        display(child);
    }

}

function construct(arr){
    let root;
    let st=new Stack();
    for(let a of arr){
        if(a==-1){
            st.pop();
        }
        else{
            let node=new Node();
            node.data=a;
            if(st.size()>0){
                st.peek().children.push(node);
            }
            else{
                root=node;
            }
            st.push(node);
        }
    }

    return root;
}

function sizeOfGenericTree(node){
    let size=1;

    for(let child of node.children){
        size+=sizeOfGenericTree(child);
    }

    return size;
}

function maximum(node){
    let max=node.data;

    for(let child of node.children){
        max=Math.max(maximum(child),max);
    }

    return max;
}

function height(node){
    let h=-1;

    for(let child of node.children){
        h=Math.max(height(child),h);
    }

    return h+1;
}

function areMirror(node1, node2){
    if(node1.children.length!=node2.children.length){
        return false;
    }

    for(let i=0;i<node1.children.length;++i){
        if(areMirror(node1.children[i],node2.children[node2.children.length-1-i])==false){
            return false;
        }
    }

    return true;
}

function isSymmetric(node){
    return areMirror(node,node);
}

let root1=construct([10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, -1, 90, -1, -1, 40, 100, -1, 110, -1, -1, -1]);
let root2=construct([100, 200, -1, 300, 500, -1, 600, -1, -1, 400, -1, -1]);
//display(root1);
//console.log(sizeOfGenericTree(root));
//console.log(maximum(root));
//console.log(height(root1));
console.log(isSymmetric(root1));