
/*
* Delete An Element from a Singly Linked List
* Time Complexity: O(n)
* Space Complexity: O(n)
*/

function Node(value){
    this.data=value;
    this.next=null;
}

function SinglyLinkedList(){
    this.head=null;
    this.size=0;
}

SinglyLinkedList.prototype.insert=function(value){
    let currNode=this.head;
    if(currNode==null){
        this.head=new Node(value);
    }
    else{
        this.head=new Node(value);
        this.head.next=currNode;
    }
    ++this.size;
}

SinglyLinkedList.prototype.delete=function(value){
    let currNode=this.head;
    if(currNode.data==value){
        this.head=currNode.next;
        this.size--;
    }
    else{
        let prevNode=currNode;
        while(currNode.next!=null){
            if(currNode.data==value){
                prevNode.next=currNode.next;
            }

            prevNode=currNode;
            currNode=currNode.next;
        }

        if(currNode.data==value){
            prevNode.next=null;
        }
        --this.size;
    }
}

SinglyLinkedList.prototype.display=function(){
    let currNode=this.head;
    while(currNode!=null){
        console.log(currNode.data);
        currNode=currNode.next;
    }
}

let SLL=new SinglyLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(3);
SLL.insert(4);
SLL.insert(5);
SLL.display();
SLL.delete(5);
SLL.display();