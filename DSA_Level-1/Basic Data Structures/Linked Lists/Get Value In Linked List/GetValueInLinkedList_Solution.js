
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

    getFirst(){
        if(this.length()==0){
            console.log("List is empty");
            return -1;
        }

        return this.head.data;
    }

    getLast(){
        if(this.length()==0){
            console.log("List is empty");
            return -1;
        }

        return this.tail.data;
    }

    getAt(idx){
        if(idx<0 && idx>=this.length()){
            console.log("Invalid arguments");
            return -1;
        }
        else if(this.length()==0){
            console.log("List is empty");
            return -1;
        }
        else if(idx==0){
            return this.getFirst();
        }
        else if(idx==this.length()-1){
            return this.getLast();
        }
        else{
            let temp=this.head;
            while(idx>0){
                temp=temp.next;
                --idx;
            }
            return temp.data;
        }
    }
}

let ll1=new LinkedList();
ll1.addLast(1);
ll1.addLast(2);
ll1.addLast(3);
console.log('1: ',ll1.getAt(1))
console.log('Last: ',ll1.getLast())
ll1.diplay();
console.log('Length',ll1.length());
ll1.addLast(4);
ll1.addLast(5);
console.log('First: ',ll1.getFirst())
ll1.diplay();
console.log(ll1.length());