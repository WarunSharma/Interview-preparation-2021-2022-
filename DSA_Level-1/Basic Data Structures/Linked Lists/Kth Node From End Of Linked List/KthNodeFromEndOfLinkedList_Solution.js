

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

    addFirst(val){
        let temp=new Node(val);
        if(this.length()==0){
            this.head=this.tail=temp;
        }
        else{
            temp.next=this.head;
            this.head=temp;
        }
        ++this.size;
    }

    addAt(idx,val){
        if(idx<0 || idx>=this.length()){
            console.log("Invalid arguments");
        }
        else if(idx==0){
            this.addFirst(val);
            this.size++;
        }
        else if(idx==this.length()-1){
            this.addLast(val);
            this.size++;
        }
        else{
            let temp=this.head;
            let newNode=new Node(val);
            while(--idx){
                temp=temp.next;
            }
            newNode.next=temp.next;
            temp.next=newNode;
            this.size++;
        }
    }

    removeLast(){
        if(this.size==0){
            console.log("List is empty");
        }
        else if(this.size==1){
            this.head=this.tail=null;
            this.size=0;
        }
        else{
            let temp=this.head;
            while(temp.next!=this.tail){
                temp=temp.next;
            }
            temp.next=null;
            this.tail=temp;
            this.size--;
        }
    }

    removeAt(idx){
        if(this.length()==0){
            console.log("List is empty");
        }
        else if(idx<0 || idx>=this.size){
            console.log("Invalid arguments");
        }
        else{
            if(idx==0){
                this.removeFirst();
            }
            else if(idx==this.size-1){
                this.removeLast();
            }
            else{
                let temp=this.head;
                while(--idx){
                    temp=temp.next;
                }
                temp.next=temp.next.next;
                this.size--;
            }
        }

    }

    getNodeAt(idx){
        if(idx<0 && idx>=this.length()){
            console.log("Invalid arguments");
            return -1;
        }
        else if(this.length()==0){
            console.log("List is empty");
            return -1;
        }
        else if(idx==0){
            return this.head;
        }
        else if(idx==this.length()-1){
            return this.tail;
        }
        else{
            let temp=this.head;
            while(idx>0){
                temp=temp.next;
                --idx;
            }
            return temp;
        }
    }

    reverseDI(){
        let left=0;
        let right=this.size-1;
        while(left<right){
            let leftData=this.getNodeAt(left);
            let rightData=this.getNodeAt(right);
            let temp=leftData.data;
            leftData.data=rightData.data;
            rightData.data=temp
            left++;
            right--;
        }
    }

    reversePI(){
        let prev=null;
        let curr=this.head;
        let next;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        
        let temp=this.head;
        this.head=prev;
        this.tail=temp;
      }
      
      kthFromLast(k){
          let fast=this.head;
          let slow=this.head;
          let tempK=k;
          
          while(tempK){
            fast=fast.next;  
            tempK--;
          }

          while(fast!=this.tail){
              fast=fast.next;
              slow=slow.next;
          }

          return slow;
      }
}

let ll1=new LinkedList();
//ll1.removeLast();
ll1.removeAt(1);
ll1.addLast(1);
//ll1.removeLast();
ll1.addLast(2);
ll1.removeAt(1);
ll1.addLast(3);
ll1.addFirst(0);
ll1.addFirst(-1);
ll1.addAt(1,-0.5);
ll1.removeAt(1);
ll1.reversePI();
console.log('1: ',ll1.getAt(1))
console.log('Last: ',ll1.getLast())
console.log('Kth node from last: ',ll1.kthFromLast(2));
//ll1.removeLast();
ll1.diplay();
console.log('Length',ll1.length());
ll1.addLast(4);
ll1.addLast(5);
//ll1.removeLast();
console.log('First: ',ll1.getFirst())
ll1.diplay();
console.log(ll1.length());