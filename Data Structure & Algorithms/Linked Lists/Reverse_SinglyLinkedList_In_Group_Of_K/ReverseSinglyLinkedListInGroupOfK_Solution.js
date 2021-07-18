

/* Reverse a Singly Linked List in Group Of K
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

SinglyLinkedList.prototype.reverse=function(head,k){
    let cur=head;
    let prev=null;
    let next=null;
    let c=0;
    while(cur!=null && c<k){
        next=cur.next;
        cur.next=prev;
        prev=cur;
        cur=next;
        c++;
    }
    if(next!=null){
        head.next=this.reverse(next,k);
    }
    return prev;
}

let SLL=new SinglyLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(3);
SLL.insert(4);
SLL.insert(5);
SLL.display();
SLL.head=SLL.reverse(SLL.head,2);
SLL.display()
