
/*
* Insert An Element At Beginning of Doubly Linked List
* Time Complexity: O(1)
* Space Complexity: O(n)
*/

function Node(value){
    this.data=value;
    this.prev=null;
    this.head=null;
}

function DoublyLinkedList(){
    this.head=null;
    this.tail=null;
    this.size=0;
}

DoublyLinkedList.prototype.insert=function(value){
    if(this.head==null){
        this.head=new Node(value);
        this.tail=this.head;
    }
    else{
        let temp=this.head;
        this.head=new Node(value);
        this.head.next=temp;
    }
    ++this.size;
}

DoublyLinkedList.prototype.display=function(){
    let cursor=this.head;
    while(cursor!=null){
        console.log(cursor.data);
        cursor=cursor.next;
    }
}

let DLL=new DoublyLinkedList();
DLL.insert(1);
DLL.insert(2);
DLL.insert(3);
DLL.insert(4);
DLL.insert(5);
DLL.display();