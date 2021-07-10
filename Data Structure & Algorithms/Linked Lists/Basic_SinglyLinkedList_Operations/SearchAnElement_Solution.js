
function Node(value){
    this.data=value;
    this.next=null;
}

function SinglyLinkedList(){
    this.head=null;
    this.size=0;
}

SinglyLinkedList.prototype.insert=function(value){
    if(this.head==null){
        this.head=new Node(value);
    }
    else{
        let currNode=this.head;
        this.head=new Node(value);
        this.head.next=currNode;
    }
    ++this.size;
}

SinglyLinkedList.prototype.display=function(){
    let currNode=this.head;
    while(currNode!=null){
        console.log(currNode.data);
        currNode=currNode.next;
    }
}

SinglyLinkedList.prototype.search=function(value){
    let currNode=this.head;
    while(currNode!=null){
        if(currNode.data==value){
            return true;
        }
        currNode=currNode.next;
    }
    return false;
}

let SLL=new SinglyLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(3);
SLL.insert(4);
SLL.insert(5);
SLL.display();
console.log(SLL.search(1));
console.log(SLL.search(6));