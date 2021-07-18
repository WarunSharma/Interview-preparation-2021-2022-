
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

function isPalindrom(head){
    if(head==null){
        return false;
    }
    let palindrom='';
    let curNode=head;
    while(curNode!==null){
        palindrom+=curNode.data;
        curNode=curNode.next;
    }
    for(let i=0,j=palindrom.length-1;i<j;++i,--j){
        if(palindrom[i]!=palindrom[j]){
            return false;
        }
    }
    return true;
}

let SLL=new SinglyLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(3);
SLL.insert(2);
SLL.insert(1);
SLL.display();
console.log(isPalindrom(SLL.head));
