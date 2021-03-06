

/* Insert an Element at End of Linked List
* Time Complexity: O(n)
* Space Complexity: O(1)
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

SinglyLinkedList.prototype.removeDuplicates=function(){
    let cursor=this.head;
    while(cursor.next!==null){
        if(cursor.data==cursor.next.data){
            cursor.next=cursor.next.next;
        }
        else{
            cursor=cursor.next;
        }
    }
}

let SLL=new SinglyLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(2);
SLL.insert(2);
SLL.insert(2);
SLL.display();
SLL.removeDuplicates();
SLL.display();