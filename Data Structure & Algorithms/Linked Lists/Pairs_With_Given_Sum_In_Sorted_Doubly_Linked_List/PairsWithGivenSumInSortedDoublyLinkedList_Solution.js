
/*
* Pairs with Given Sum in Doubly LinkedList
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

DoublyLinkedList.prototype.getPairs=function(k){
    let result=[];
    let left=this.head;
    let right=this.tail;
    while(left!=right.next && left!=right){
        console.log(left.data,right.data);
        if((left.data+right.data)>k){
            right=right.prev;
        }
        else if((left.data+right.data)<k){
            left=left.next;
        }
        else{
            result.push([left.data,right.data]);
            right=right.prev;
            left=left.next;
        }
    }

    return result;
}

let DLL=new DoublyLinkedList();
DLL.insert(1);
DLL.insert(2);
DLL.insert(3);
DLL.insert(4);
DLL.insert(5);
DLL.insert(6);
DLL.insert(7);
DLL.insert(8);
DLL.insert(9);
DLL.display();
console.log(DLL.getPairs(7));