
/*
* Search An Element in Doubly Linked List
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
    this.tail=null
    this.size=0;
}

DoublyLinkedList.prototype.insert=function(value){
    if(this.head==null){
        this.head=new Node(value);
        this.tail=this.head;
    }
    //Insert an Element At End using tail pointer
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

DoublyLinkedList.prototype.search=function(value){
    let cursor=this.head;
    //Iterate the Linked List for searching an element
    while(cursor!=null){
        if(cursor.data==value){
            return true;
        }
        cursor=cursor.next;
    }
    return false;
}

let DLL=new DoublyLinkedList();
DLL.insert(1);
DLL.insert(2);
DLL.insert(3);
DLL.insert(4);
DLL.insert(5);
DLL.display();
console.log(DLL.search(3));
console.log(DLL.search(6));