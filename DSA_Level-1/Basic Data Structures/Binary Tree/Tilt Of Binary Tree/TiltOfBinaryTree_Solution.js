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
    
    if(node==null)
        return;

    if(node.data==data){
        return true;
    }

    let lFind=find(node.left,data);
    if(lFind)
        return true;

    let rFind=find(node.right,data);
    if(rFind)
        return true;    


    return false;    
}

function nodeToRootPath(node,data){
    let result=[];
    if(node.data==data){
        let baseResult=[];
        baseResult.push(node);
        return baseResult;
    }
        
    let leftRoute=[];    
    if(node.left)
        leftRoute=nodeToRootPath(node.left,data);
    let rightRoute=[];
    if(node.right)
        rightRoute=nodeToRootPath(node.right,data);

    if(leftRoute.length>0){
        leftRoute.push(node);
        return leftRoute;
    }

    if(rightRoute.length>0){
        rightRoute.push(node);
        return rightRoute;
    }

    return [];
}

class PairLevel{
    constructor(node,level){
        this.node=node;
        this.level=level;
    }
}

function printKLevelsDown(node,k,blocker){

    //Solution 1
    // let level=0;
    // let rootPair=new PairLevel(node,level);
    // let queue=new Queue;
    // queue.addLast(rootPair);

    // while(queue.size()>0){
    //     let queueSize=queue.size();
    //     while(queueSize-->0){
    //         let topPair=queue.removeFirst();

    //         if(topPair.level==k){
    //             console.log(topPair.node.data);
    //         }

    //         if(topPair.node.left){
    //             let leftPair=new PairLevel(topPair.node.left,level+1);
    //             queue.addLast(leftPair);
    //         }

    //         if(topPair.node.right){
    //             let rightPair=new PairLevel(topPair.node.right,level+1);
    //             queue.addLast(rightPair);
    //         }
    //     }
    //     level++;
    // }

    //Solution 2
    if(node==null || k<0 || node==blocker){
        return;
    }

    if(k==0){
        console.log(node.data)
    }

    printKLevelsDown(node.left,k-1,blocker);
    printKLevelsDown(node.right,k-1,blocker);
}

function printKNodesFar(node,data,k){
    let paths=nodeToRootPath(node,data);
    console.log(paths);
    for(let i=0;i<paths.length;++i){
        printKLevelsDown(paths[i],k-i,i>0?paths[i-1]:null);
    }
}

function createLeftCloneTree(node){

    if(node==null){
        return null;
    }
    let leftClone=createLeftCloneTree(node.left);
    let rightClone=createLeftCloneTree(node.right);

    let newNode=new Node(node.data);
    newNode.left=leftClone;
    node.left=newNode;

    return node;
}

function transBackFromLeftClonedTree(node){

    if(node==null)
        return null;

    let leftClone=transBackFromLeftClonedTree(node.left.left);
    let rightClone=transBackFromLeftClonedTree(node.right);

    node.left=leftClone;

    return node; 
}

let dia=0;

function diameter1(node){

    if(node==null){
        return -1;
    }

    let lt=diameter1(node.left);
    let rt=diameter1(node.right);

    let ht=Math.max(lt,rt)+1;

    if(lt+rt+2>dia){
        dia=lt+rt+2;
    }

    return ht;
}

function diameter2(node){
    if(node==null){
        return 0;
    }

    let lh=height(node.left);
    let rh=height(node.right);

    let Dia=lh+rh+2;

    let lDia=diameter2(node.left);
    let rDia=diameter2(node.right);

    return Math.max(Dia,Math.max(lDia,rDia));

}

class DiameterPair{
    constructor(height,diameter){
        this.height=height;
        this.diameter=diameter;
    }
}

function diameter3(node){

    if(node==null){
        let basePair=new DiameterPair();
        basePair.height=-1;
        basePair.diameter=0;
        return basePair;
    }

    let leftPair=diameter3(node.left);
    let rightPair=diameter3(node.right);

    let diameterPair=new DiameterPair();
    diameterPair.height=Math.max(leftPair.height,rightPair.height)+1;
    diameterPair.diameter=Math.max(leftPair.height+rightPair.height+2,Math.max(leftPair.diameter,rightPair.diameter));

    return diameterPair;
}

class sumDifferPair{
    constructor(sum,differ){
        this.sum=sum;
        this.differ=differ;
    }
}

let tiltAll=0;
function tilt(node){

    if(node==null){
        return new sumDifferPair(0,0);
    }

    let leftPair=tilt(node.left);
    let rightPair=tilt(node.right);

    let resPair=new sumDifferPair();
    resPair.sum=leftPair.sum+rightPair.sum+node.data;
    resPair.differ=Math.abs(leftPair.sum-rightPair.sum);
    tiltAll+=resPair.differ;
    return resPair;
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
// console.log(find(62));
// console.log(nodeToRootPath(root,62));

// printKLevelsDown(root,3);
// printKNodesFar(root,37,2)
// createLeftCloneTree(root);
// preorder(root);
// console.log('------------------');
// transBackFromLeftClonedTree(root);
// preorder(root);

// diameter1(root);
//console.log(dia);

//console.log(diameter2(root));
    
//console.log(diameter3(root));

console.log(tilt(root));
console.log(tiltAll);