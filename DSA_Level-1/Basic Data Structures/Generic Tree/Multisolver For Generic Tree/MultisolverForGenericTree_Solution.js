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

let max=Number.MIN_SAFE_INTEGER;
let min=Number.MAX_SAFE_INTEGER;
let height=0;
let sum=0;

function multiSolver(node,depth){
    sum+=node.data;
    if(max<node.data){
        max=node.data;
    }
    if(min>node.data){
        min=node.data;
    }
    if(depth>height){
        height=depth;
    }

    for(let child of node.children){
        multiSolver(child,depth+1);
    }

}

let root=construct([10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]);
//display(root);
//console.log(sizeOfGenericTree(root));
multiSolver(root,0);
console.log("Sum: ",sum);
console.log("Height: ",height);
console.log("Max: ",max);
console.log("Min: ",min);
