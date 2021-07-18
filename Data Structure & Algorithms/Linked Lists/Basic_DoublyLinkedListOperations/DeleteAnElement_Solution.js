
/*
* Delete An Element of Doubly Linked List
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

function Node(value){
    this.data=value;
    this.prev=null;
    this.next=null;
}

function DoublyLinkedList(){
    this.head=null;
    this.tail=null;
    this.size=0;
}

DoublyLinkedList.prototype.insert=function(value){
    if(this.head==null){
        this.head=new Node(value);
        this.tail=this.head;
    }
    else{
        let temp=this.tail;
        this.tail=new Node(value);
        temp.next=this.tail;
        this.tail.prev=temp;
    }
    ++this.size;
}

DoublyLinkedList.prototype.display=function(){
    let cursor=this.head;
    while(cursor!=null){
        console.log(cursor.data);
        cursor=cursor.next;
    }
}

DoublyLinkedList.prototype.delete=function(value){
    let cursor=this.head;
    if(cursor!==null){
        //First Node matches the value
        if(cursor.data==value){
            this.head=this.head.next;
            //Check LinkedList has more than one node
            if(cursor.next!=null){
                this.head.prev=null;
            }
            else{
                this.tail=null;
            }
            --this.size;
        }
        else{
            while(cursor.next!=null){
                if(cursor.data==value){
                    cursor.prev.next=cursor.next;
                    cursor.next.prev=cursor.prev;
                    --this.size;
                }
                cursor=cursor.next;
            }
    
            if(cursor.data==value){
                this.tail=cursor.prev;
                cursor.prev.next=null;

                --this.size;
            }
        }
    }
}

let DLL=new DoublyLinkedList();
DLL.insert(1);
DLL.insert(2);
DLL.insert(3);
DLL.insert(4);
DLL.insert(5);
DLL.display();
DLL.delete(5)
DLL.display()