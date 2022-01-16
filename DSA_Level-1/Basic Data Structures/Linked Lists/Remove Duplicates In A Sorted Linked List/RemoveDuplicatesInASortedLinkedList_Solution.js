

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

      mid(){
          let fast=this.head;
          let slow=this.head;
          while(fast!=this.tail && fast.next!=this.tail){
              fast=fast.next.next;
              slow=slow.next;
          }

          return slow.data;
      }

      removeDuplicates(){
          let res=new LinkedList();
          while(this.length()>0){
              let val=this.getFirst();
              this.removeFirst();

              if(res.size==0 || val!=res.tail.data){
                  res.addLast(val);
              }
              this.head=res.head;
              this.tail=res.tail;
              this.size=res.size;
          }
      }

}

function midnode(head,tail){
    let fast=head;
    let slow=head;
    while(fast!=tail && fast.next!=tail){
      fast=fast.next.next;
      slow=slow.next;
    }

    return slow;
}

function mergeSort(head,tail){

    if(head==tail){
        let l1=new LinkedList()
        l1.addLast(head.data);
        return l1;
    }

    let mid=midnode(head,tail);
    let fss=mergeSort(head,mid);
    let lss=mergeSort(mid.next,tail);
    let res=mergeTwoSortedLists(fss,lss);
    return res;
  }

function mergeTwoSortedLists(l1, l2){
    let res=new LinkedList();
    let temp1=l1.head;
    let temp2=l2.head;

    while(temp1!=null && temp2!=null){
        if(temp1.data<temp2.data){
            res.addLast(temp1.data);
            temp1=temp1.next;
        }
        else{
            res.addLast(temp2.data);
            temp2=temp2.next;
        }
    }

    while(temp1!=null){
        res.addLast(temp1.data);
        temp1=temp1.next;
    }

    while(temp2!=null){
        res.addLast(temp2.data);
        temp2=temp2.next;
    }

    return res;
}

let ll1=new LinkedList();
ll1.addLast(1);
ll1.addLast(10);
ll1.addLast(3);
ll1.addLast(11);
ll1.addLast(5);
ll1.addLast(5);
ll1.addLast(5);
let res=mergeSort(ll1.head,ll1.tail);
res.removeDuplicates();
res.diplay();
