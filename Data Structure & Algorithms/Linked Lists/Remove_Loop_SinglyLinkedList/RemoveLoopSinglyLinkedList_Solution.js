


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
    this.loop=null;
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
        if(value==3){
            this.loop=cursor.next;
        }
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

SinglyLinkedList.prototype.createLoop=function(){
    let cursor=this.head;
    while(cursor.next!=null){
        cursor=cursor.next;
    }
    cursor.next=this.loop;
}

SinglyLinkedList.prototype.deleteLoop=function(fast){
    let slow=this.head;
    while(slow!=fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    fast.next=null;
    return 1;
}

SinglyLinkedList.prototype.detectLoop=function(){
    let slow=this.head;
    let fast=this.head;
    while(fast!==null && fast.next!==null){
        if(slow.next==fast.next.next)
            return this.deleteLoop(slow);
        slow=slow.next;
        fast=fast.next.next; 
    }

    return 0; 
}

let SLL=new SinglyLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(3);
SLL.insert(4);
SLL.insert(5);
SLL.createLoop();
console.log(SLL.detectLoop());
SLL.display();
