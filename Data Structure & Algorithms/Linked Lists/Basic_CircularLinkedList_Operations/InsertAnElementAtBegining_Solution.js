
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
        this.head=cursor.next
    }
}

CircularLinkedList.prototype.display=function(){
    let cursor=this.head;
    do{
        console.log(cursor.data);
        cursor=cursor.next;
    }while(cursor!=this.head)
}

let CLL=new CircularLinkedList();
CLL.insert(1);
CLL.insert(2);
CLL.insert(3);
CLL.insert(4);
CLL.insert(5);
CLL.display()