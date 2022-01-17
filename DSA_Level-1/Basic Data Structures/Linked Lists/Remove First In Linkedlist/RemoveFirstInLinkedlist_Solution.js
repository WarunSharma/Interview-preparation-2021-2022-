class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    head=null;
    tail=null;
    size=0;

    length(){
        return this.size;
    }

    addLast(val){
        let temp=new Node(val);
        if(this.head==null){
            this.head=this.tail=temp;
        }
        else{
            this.tail.next=temp;
            this.tail=temp;
        }
        ++this.size;
    }

    diplay(){
        let temp=this.head;
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next;
        }
    }

    removeFirst(){
        if(this.length()==0){
            console.log("List is empty");
        }
        else if(this.length()==1){
            this.head=this.tail=null;
            this.size=0;
        }
        else{
            this.head=this.head.next;
            this.size--;
        }
    }
}

let ll1=new LinkedList();
ll1.addLast(1);
ll1.addLast(2);
ll1.addLast(3);
ll1.removeFirst();
ll1.removeFirst();
ll1.removeFirst();
ll1.removeFirst();
ll1.diplay();
console.log('Length',ll1.length());
ll1.addLast(4);
ll1.addLast(5);
ll1.diplay();
console.log(ll1.length());