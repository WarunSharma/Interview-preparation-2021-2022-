
class Queue{
    front;
    rear;
    queueArray=[];

    constructor(){
        this.front=-1;
        this.rear=-1;
    }
    
    isEmpty(){
        return this.front==-1;
    }

    enQueue(ele){
        if(this.isEmpty()){
            this.queueArray.push(ele);
            ++this.front;
            ++this.rear;
        }
        else{
            this.queueArray.push(ele);
            ++this.rear;
        }
    }

    deQueue(){
        if(this.isEmpty()){
            return -1;
        }
        else{
            let ele=this.queueArray.shift();
            --this.rear;
            if(this.rear==-1){
                this.front=-1;
            }
            return ele;
        }
    }

}

let queue1=new Queue();
queue1.enQueue(1);
queue1.enQueue(2);
queue1.enQueue(3);
queue1.enQueue(4);

while(!queue1.isEmpty()){
    console.log(queue1.deQueue(),' ');
}

queue1.enQueue(4);
queue1.enQueue(3);
queue1.enQueue(2);
queue1.enQueue(1);

while(!queue1.isEmpty()){
    console.log(queue1.deQueue(),' ');
}