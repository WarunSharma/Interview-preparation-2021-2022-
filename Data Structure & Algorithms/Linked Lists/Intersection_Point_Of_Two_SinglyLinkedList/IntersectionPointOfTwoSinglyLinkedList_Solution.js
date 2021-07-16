

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

function setIntersection(head1,head2){
    let cursor1=head1;
    let cursor2=head2;
    while(cursor2.next){
        cursor2=cursor2.next;
    }
    while(cursor1){
        if(cursor1.data==3){
            break;
        }
        cursor1=cursor1.next;
    }
    cursor2.next=cursor1;
}

function intersectPoint(head1, head2)
    {
        let set=new Set();
        let cursor=head1;
        while(cursor){
            set.add(cursor);
            cursor=cursor.next;
        }
        cursor=head2;
        while(cursor){
            if(set.has(cursor)){
                return cursor.data;
            }
            cursor=cursor.next;
        }
    }

let SLL1=new SinglyLinkedList();
SLL1.insert(1);
SLL1.insert(2);
SLL1.insert(3);
SLL1.insert(4);
SLL1.insert(5);
let SLL2=new SinglyLinkedList();
SLL2.insert(10);
SLL2.insert(9);
setIntersection(SLL1.head,SLL2.head);
// SLL1.display();
// SLL2.display()
console.log(intersectPoint(SLL1.head,SLL2.head));

