
/* Add 2 numbers represented by LinkedLists
* Time Complexity: O(n)
* Space Complexity: O(n) {Resultant Linked List}
*/

function Node(value){
    this.data=value;
    this.next=null;
}

function SinglyLinkedList(value){
    this.head=null;
    this.size=0;
}

//Insert a node at End
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

let display=function(head){
    let cursor=head;
    while(cursor!=null){
        console.log(cursor.data);
        cursor=cursor.next;
    }
}

//Recursive solution to reverse a Linked List
let reverse=function(head){
    if(head==null || head.next==null){
        return head;
    }

    let rest=reverse(head.next);
    head.next.next=head;
    head.next=null;

    return rest;
}

let calculateLength=function(head){
    let cursor=head;
    let length=0;
    while(cursor!=null){
        ++length;
        cursor=cursor.next;
    }
    return length;
}

let addLinkedLists=function(head1,head2){
    let curNode1=head1;
    let curNode2=head2;
    let length1=calculateLength(head1);
    let length2=calculateLength(head2);
    let remainder=0;
    let sum=0;
    let SLL3=new SinglyLinkedList();    //Resultant LinkedList
    while(curNode1!=null || curNode2!=null){
        if(length1==0 || length2==0){
            return;
        }
        else{
            if(curNode1!=null && curNode2!=null){
                sum=curNode1.data+curNode2.data+remainder;
                curNode1=curNode1.next;
            curNode2=curNode2.next;
            }
            else{
                if(curNode1==null){
                    sum=curNode2.data+remainder;
                    curNode2=curNode2.next;
                }
                if(curNode2==null){
                    sum=curNode1.data+remainder;
                    curNode1=curNode1.next;
                }
            }
            SLL3.insert(sum%10);
            remainder=Math.floor(sum/10);
        }
    }

    //Check remainder > 0 after traversal of both LinkedList
    if(remainder>0){
        SLL3.insert(remainder%10)
    }
    return SLL3.head;
}

let SLL1=new SinglyLinkedList();
let SLL2=new SinglyLinkedList();
SLL1.insert(9);
SLL1.insert(9);
SLL1.insert(9);
SLL1.insert(9);
SLL1.insert(9);
//Reverse First LinkedList for iterating and carrying remainder
SLL1.head=reverse(SLL1.head);
SLL2.insert(9);
SLL2.insert(9);
SLL2.insert(9);
SLL2.insert(9);
//Reverse Second LinkedList for iterating and carrying remainder
SLL2.head=reverse(SLL2.head);
let resultantHead=addLinkedLists(SLL1.head,SLL2.head);
resultantHead=reverse(resultantHead);
display(resultantHead);


