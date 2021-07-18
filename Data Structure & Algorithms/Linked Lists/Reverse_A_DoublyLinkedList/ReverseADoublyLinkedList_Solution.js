
/*
* Reverse a Doubly Linked List
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

function Node(value){
    this.data=value;
    this.prev=null;
    this.next=null;
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
        let temp=this.tail;
        this.tail=new Node(value);
        temp.next=this.tail;
        this.tail.prev=temp;
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

DoublyLinkedList.prototype.reverse=function(){
    let cursor=this.head;
    let temp=null;
    while(cursor){
        temp=cursor.prev;
        cursor.prev=cursor.next;
        cursor.next=temp;
        cursor=cursor.prev;
    }

    if(temp){
        this.tail=this.head;
        this.head=temp.prev;
    }

}

let DLL=new DoublyLinkedList();
DLL.insert(1);
DLL.insert(2);
DLL.insert(3);
DLL.insert(4);
DLL.insert(5);
DLL.display();
DLL.reverse();
DLL.display();