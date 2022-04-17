class Solution {
    public boolean isPowerOfFour(int n) {
        int x=n&(n-1);
        
        if(n>0 && x==0){
            int count=0;
            
            while(n>1){
                n=n>>1;
                ++count;
            }
            
            return count%2==0?true:false;
        }
        
        return false;
    }
}