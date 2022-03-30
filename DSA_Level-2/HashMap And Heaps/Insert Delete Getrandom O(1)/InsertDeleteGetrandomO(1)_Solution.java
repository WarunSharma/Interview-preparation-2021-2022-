class RandomizedSet {

    Random r;
    ArrayList<Integer> arr;
    HashMap<Integer,Integer> map;
    public RandomizedSet() {
        r=new Random();
        arr=new ArrayList<>();
        map=new HashMap<>();
    }
    
    public boolean insert(int val) {
        if(map.containsKey(val)){
            return false;
        }
        
        arr.add(val);
        map.put(val,arr.size()-1);
        
        return true;
    }
    
    public boolean remove(int val) {
        if(map.containsKey(val)){
            int valIdx=map.get(val);
            int lastIdx=arr.size()-1;
            int lastVal=arr.get(lastIdx);
            
            arr.set(valIdx,lastVal);
            arr.set(lastIdx,val);
            
            map.put(val,lastIdx);
            map.put(lastVal,valIdx);
            
            arr.remove(lastIdx);
            map.remove(val);
            return true;
        }
        else{
            return false;
        }
    }
    
    public int getRandom() {
        int idx=r.nextInt(arr.size());
        return arr.get(idx);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */