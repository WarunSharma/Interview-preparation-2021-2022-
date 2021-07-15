
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

function intersection(head1,head2){
    let cursor1=head1;
    let cursor2=head2;
    let result=new SinglyLinkedList();
    while(cursor1!=null && cursor2!=null){
        if(cursor1.data<cursor2.data){
            cursor1=cursor1.next;
        }
        else if(cursor1.data>cursor2.data){
            cursor2=cursor2.next;
        }
        else{
            result.insert(cursor1.data);
            cursor1=cursor1.next;
            cursor2=cursor2.next;
        }
    }
    return result.head;
}

let SLL1=new SinglyLinkedList();
SLL1.insert(1);
SLL1.insert(2);
SLL1.insert(3);
SLL1.insert(4);
SLL1.insert(5);
SLL1.display();
let SLL2=new SinglyLinkedList();
SLL2.insert(1);
SLL2.insert(3);
SLL2.insert(5);
SLL2.display();
let resultantHead=intersection(SLL1.head,SLL2.head);
console.log(resultantHead);

