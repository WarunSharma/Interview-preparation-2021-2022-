
class Stack{
    constructor(){
        this.arr=[];
    }

    push(val){
        this.arr.push(val);
    }

    pop(){
        return this.arr.pop();
    }

    size(){
        return this.arr.length;
    }

    peek(){
        return this.arr[this.size-1];
    }

}



class MaxFrequencyStack{
        constructor(){
            this.freqMap=new Map();
            this.freqStackMap=new Map();
            this.maxFreq=0
        }

        push(a){
            let st=new Stack();
            if(this.freqMap.has(a)){
                this.freqMap.set(a,this.freqMap.get(a)+1);
                if(this.freqStackMap.has(this.freqMap.get(a))){
                    st=this.freqStackMap.get(this.freqMap.get(a));
                }
                st.push(a);
                this.freqStackMap.set(this.freqMap.get(a),st);
            }
            else{
                this.freqMap.set(a,1);
                if(this.freqStackMap.has(1)){
                    st=this.freqStackMap.get(1);
                }
                
                st.push(a);
                this.freqStackMap.set(1,st);
            }

            this.maxFreq=Math.max(this.freqMap.get(a),this.maxFreq);
        }

        pop(){

            let val=this.freqStackMap.get(this.maxFreq).pop();

            if(this.freqStackMap.get(this.maxFreq).size()==0){
                this.freqStackMap.delete(this.maxFreq);
                this.maxFreq--;
            }

            this.freqMap.set(val,this.freqMap.get(val)-1);

            if(this.freqMap.get(val)==0){
                this.freqMap.delete(val);
            }

            console.log(val);
            return val;

        }

        display(){
            console.log(this.freqMap);
            console.log(this.freqStackMap);
        }
}

let maxFrequencyStack=new MaxFrequencyStack();
maxFrequencyStack.push(5);
maxFrequencyStack.push(7);
maxFrequencyStack.push(5);
maxFrequencyStack.push(7);
maxFrequencyStack.push(4);
maxFrequencyStack.push(5);

maxFrequencyStack.display()

maxFrequencyStack.pop();
maxFrequencyStack.pop();
maxFrequencyStack.pop();
maxFrequencyStack.pop();

maxFrequencyStack.display();




