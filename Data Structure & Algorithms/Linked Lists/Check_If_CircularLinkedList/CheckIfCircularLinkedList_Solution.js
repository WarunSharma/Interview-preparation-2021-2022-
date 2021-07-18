
/* Check if LinkedList is a Circular LinkedList
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

function Node(value){
    this.data=value;
    this.next=null;
}

function CircularLinkedList(){
    this.head=null;
    this.size=0;
}

CircularLinkedList.prototype.insert=function(value){
    if(this.head==null){
        this.head=new Node(value);
        this.head.next=this.head;
    }
    else{
        let cursor=this.head;
        while(cursor.next!=this.head){
            cursor=cursor.next;
        }

        cursor.next=new Node(value);
        cursor.next.next=this.head
    }
}

CircularLinkedList.prototype.display=function(){
    let cursor=this.head;
    do{
        console.log(cursor.data);
        cursor=cursor.next;
    }while(cursor!=this.head)
}

CircularLinkedList.prototype.isCircular=function(){
    if(this.head===null){
        return true;
    }
    let node=this.head.next;
    //Traverse the LinkedList till node reaches null(if singly LinkedList) or head(Circular LinkedList)
    while(node!==null && node!==this.head){
        node=node.next;
    }
    return this.head===node
}

let CLL=new CircularLinkedList();
CLL.insert(1);
CLL.insert(2);
CLL.insert(3);
CLL.insert(4);
CLL.insert(5);
CLL.display()
console.log(CLL.isCircular());