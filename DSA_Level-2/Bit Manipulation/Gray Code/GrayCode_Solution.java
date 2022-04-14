import java.util.*;
 
 public class Main {
 
     public static List<Integer> grayCode(int n) {
 	    
 	    if(n==0){
 	       List<Integer> mres=new ArrayList<>();
 	       mres.add(0);
 	       return mres;
 	    }
 	    
 	    if(n==1){
 	       List<Integer> mres=new ArrayList<>();
 	       mres.add(0);
 	       mres.add(1);
 	       return mres; 
 	    }
 	    
 	    List<Integer> rres=grayCode(n-1);
 	    List<Integer> mres=new ArrayList<>();
 	    
 	    for(int i=0;i<rres.size();++i){
 	        int m=rres.get(i);
 	        mres.add(m);
 	    }
 	    
 	    for(int i=mres.size()-1;i>=0;--i){
 	        int m=rres.get(i);
 	        int bm=1<<(n-1);
 	        m=m|bm;
 	        mres.add(m);
 	    }
 	    
 	    return mres;
     }
 
     public static void main(String[] args) {
         Scanner scn = new Scanner(System.in);
         List<Integer> ans=grayCode(scn.nextInt());
         Collections.sort(ans);
         System.out.println(ans);
     }
 }