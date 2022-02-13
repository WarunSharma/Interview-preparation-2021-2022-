
class Pair{
    data;
    listIdx;
    idx;

    compareTo(other){
        return this.data-other.data;
    }
}


class PriorityQueue{
    constructor(options){
        this.data=[];
        this.options=options;
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
            if(this.data[pi].compareTo(this.data[idx])>0){
            this.swap(pi,idx);
            this.upHeapify(pi);
            }
        }
        else{
            if(this.data[idx].compareTo(this.data[pi])>0){
            this.swap(pi,idx);
            this.upHeapify(pi);
            }
        }
    }

    add(val){
        this.data.push(val);
        this.upHeapify(this.data.length-1);
    }

    downHeapify(idx){
        let min=idx;
        let max=idx
        let lci=(2*idx)+1;
        let rci=(2*idx)+2;

        if(this.options==undefined){
            if(lci<=this.data.length-1 && this.data[min].compareTo(this.data[lci])>0){
                min=lci;
            }

            if(rci<=this.data.length-1 && this.data[min].compareTo(this.data[rci])>0){
                min=rci;
            }

            if(min!=idx){
            this.swap(idx,min);
            this.downHeapify(min);
            }
        }
        else{
            if(lci<=this.data.length-1 && this.data[lci].compareTo(this.data[max])>0){
                max=lci;
            }

            if(rci<=this.data.length-1 && this.data[rci].compareTo(this.data[max])>0){
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

function mergeKSortedLists(arr){
    let res=[];
    let pq=new PriorityQueue();

    for(let i=0;i<arr.length;++i){
        let pair=new Pair();
        pair.data=arr[i][0];
        pair.listIdx=i;
        pair.idx=0;
        pq.add(pair);
    }
    
    while(pq.size()>0){
        let topPair=pq.peek();
        pq.remove();
        res.push(topPair.data);
        topPair.idx++;
        if(topPair.idx<arr[topPair.listIdx].length){
            topPair.data=arr[topPair.listIdx][topPair.idx];
            pq.add(topPair);
        }
    }

    return res;
}



let arr=[[10,20,30,40,50],[15,19,24],[5,12,18,77],[2,92]];
let k=3;

let res=mergeKSortedLists(arr);
console.log(res);