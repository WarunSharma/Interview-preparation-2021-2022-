

/* Add 1 or any num(single digit) to a Singly Linked List
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

//Insert a node at End of Linked List
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

//Iterative solution for reversing a SinglyLinkedList
SinglyLinkedList.prototype.reverse=function(){
    let curNode=this.head;
    let next=null,prev=null;
    while(curNode!=null){
        next=curNode.next;
        curNode.next=prev;
        prev=curNode;
        curNode=next;
    }
    this.head=prev;
}

SinglyLinkedList.prototype.addNum=function(num){
    /*Reverse the Linked List for Addition
    * traverse the linked list in forward direction
    * Add the carry to next nodes
    */
    this.reverse();
    let remainder=num;
    let curNode=this.head;
    let prevNode=curNode;
    let sum=0;
    while(curNode!=null){
        sum=curNode.data+remainder;
        curNode.data=Math.floor(sum/10)==0?sum:sum%10;
        remainder=Math.floor(sum/10)==0?0:1;
        prevNode=curNode;
        curNode=curNode.next;
    }
    prevNode.next=remainder>0?new Node(remainder):null;
    /*Reverse to get originally modified Linked List
    */
    this.reverse();
}

let SLL=new SinglyLinkedList();
SLL.insert(9);
SLL.insert(9);
SLL.insert(9);
SLL.insert(9);
SLL.insert(9);
SLL.display();
SLL.addNum(1);
SLL.display();