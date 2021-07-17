
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
        this.tail=this.head;
        this.head.next=this.head;
    }
    else{
        let cursor=this.head;
        while(cursor.next!=this.head){
            cursor=cursor.next;
        }

        cursor.next=new Node(value);
        this.tail=cursor.next;
        cursor.next.next=this.head
    }
    ++this.size;
}

CircularLinkedList.prototype.delete=function(data){
    let curNode=this.head;
    let prevNode=null;
    do{
        if(curNode.data==data){
            if(curNode==this.head){
                //There is only one node in the Circular Linked List
                if(curNode.next==this.head){
                    this.head.next=null;
                    this.head=null;
                }
                else{
                    this.head=this.head.next;
                    this.tail.next=this.head;
                }
            }
            else{
                prevNode.next=curNode.next;
                if(curNode==this.tail){
                    this.tail=prevNode;
                }
            }
            break;
        }
        prevNode=curNode;
        curNode=curNode.next;
    }while(curNode!=this.head);
}

CircularLinkedList.prototype.display=function(){
    let cursor=this.head;
    do{
        console.log(cursor);
        cursor=cursor.next;
    }while(cursor!=this.head)
}

let CLL=new CircularLinkedList();
CLL.insert(1);
CLL.insert(2);
CLL.insert(3);
CLL.insert(4);
CLL.insert(5);
CLL.display();
CLL.delete(1);
CLL.display();
