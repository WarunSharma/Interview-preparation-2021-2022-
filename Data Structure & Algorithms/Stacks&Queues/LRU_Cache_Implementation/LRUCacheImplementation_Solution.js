
class LRUCache{
    
    constructor(cap){
        this.cache=[];
        this.size=cap;
        this
    }

    isFull(){
        return this.size==this.cache.length;
    }

    set(key,value){
        if(this.isFull()){
            this.cache.shift();
            this.cache.push([key,value]);
        }
        else{
            this.cache.push([key,value]);
        }
    }

    get(key){
        for(let i=0;i<this.cache.length;++i){
            if(this.cache[i][0]==key){
                return this.cache[i][1];
            }
        }
        return -1;
    }

}

console.log('Testcase 1');
let LRU=new LRUCache(2);
LRU.set(1,2);
console.log(LRU.get(1));
LRU.set(2,3);
LRU.set(1,5);
LRU.set(4,5);
LRU.set(6,7);
console.log(LRU.get(4));
LRU.set(1,2);
console.log(LRU.get(3));

