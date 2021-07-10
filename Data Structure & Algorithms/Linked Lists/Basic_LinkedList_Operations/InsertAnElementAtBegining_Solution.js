
/* Insert an Element at Begining of Linked List
* Time Complexity: O(1)
* Space Complexity: O(n)
*/

function Node(value){
    this.data=value;
    this.next=null;
}

function SingleLinkedList(value){
    this.head=null;
    this.size=0;
}

SingleLinkedList.prototype.insert=function(value){
    if(this.head==null){
        this.head=new Node(value);
    }
    else{
        let tempNode=this.head;
        this.head=new Node(value);
        this.head.next=tempNode;
    }
    ++this.size;
}

SingleLinkedList.prototype.display=function(){
    let cursor=this.head;
    while(cursor!=null){
        console.log(cursor.data);
        cursor=cursor.next;
    }
}

let SLL=new SingleLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(3);
SLL.insert(4);
SLL.insert(5);
SLL.display();

