

/* Insert an Element at End of Linked List
* Time Complexity: O(n)
* Space Complexity: O(n)
*/

function Node(value){
    this.data=value;
    this.next=null;
}

function SinglyLinkedList(value){
    this.head=null;
    this.size=0;
}

SinglyLinkedList.prototype.insert=function(value){
    if(this.head==null){
        this.head=new Node(value);
    }
    else{
        let cursor=this.head;
        while(cursor.next!=null){
            cursor=cursor.next;
        }
        cursor.next=new Node(value)
    }
    ++this.size;
}

SinglyLinkedList.prototype.display=function(){
    let cursor=this.head;
    while(cursor!=null){
        console.log(cursor.data);
        cursor=cursor.next;
    }
}

SinglyLinkedList.prototype.moveLastToFront=function(){
    let curNode=this.head;
    let prevNode=curNode;
    if(curNode.next!=null)
    {
        while(curNode.next!=null){
            prevNode=curNode;
            curNode=curNode.next;
        }
        prevNode.next=null;
        curNode.next=this.head;
        this.head=curNode;
    }
}

let SLL=new SinglyLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(3);
SLL.insert(4);
SLL.insert(5);
SLL.display();
SLL.moveLastToFront();
SLL.display();
