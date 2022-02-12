

//Min && Max Heap
class PriorityQueue{
    constructor(options){
        this.data=[];
        this.options=options
        console.log(options);
    }

    peek(){
        if(this.data.length==0){
            console.log("Underflow");
            return -1;
        }

        return this.data[0];
    }

    swap(pi,idx){
        let temp=this.data[idx];
        this.data[idx]=this.data[pi];
        this.data[pi]=temp;
    }

    upHeapify(idx){
        if(idx==0) 
            return;

        let pi=Math.ceil((idx-1)/2);
        // console.log(pi);
        if(this.options==undefined){
            if(this.data[pi]>this.data[idx]){
            this.swap(pi,idx);
            this.upHeapify(pi);
            }
        }
        else{
            if(this.data[pi]<this.data[idx]){
            this.swap(pi,idx);
            this.upHeapify(pi);
            }
        }
    }

    add(val){
        this.data.push(val);
        this.upHeapify(this.data.length-1);
        // if(options==undefined){
        //     this.data.push(val);
        //     this.upHeapify(this.data.length-1);
        // }
        // else{
        //     this.data.push(val);
        //     this.upHeapify(this.data.length-1);
        // }
    }

    downHeapify(idx){
        let min=idx;
        let max=idx
        let lci=(2*idx)+1;
        let rci=(2*idx)+2;

        if(this.options==undefined){
            if(lci<=this.data.length-1 && this.data[min]>this.data[lci]){
                min=lci;
            }

            if(rci<=this.data.length-1 && this.data[min]>this.data[rci]){
                min=rci;
            }

            if(min!=idx){
            this.swap(idx,min);
            this.downHeapify(min);
            }
        }
        else{
            if(lci<=this.data.length-1 && this.data[max]<this.data[lci]){
                max=lci;
            }

            if(rci<=this.data.length-1 && this.data[max]<this.data[rci]){
                max=rci;
            }

            if(max!=idx){
            this.swap(idx,max);
            this.downHeapify(max);
            }
        }

    }
    remove(){
        if(this.data.length==0){
            console.log("underflow");
            return -1;
        }

        this.swap(0,this.data.length-1);
        let val=this.data.pop();
        this.downHeapify(0);
        return val;
    }

    display(){
        console.log(this.data);
    }

    size(){
        return this.data.length;
    }
}


let pq=new PriorityQueue();
pq.add(10)
pq.display();
pq.add(9);
pq.display();
pq.add(1)
pq.display();
pq.add(5);
pq.display();
pq.add(6)
pq.display();
pq.add(3);
pq.display();

while(pq.peek()!=-1)
    console.log(pq.remove());
