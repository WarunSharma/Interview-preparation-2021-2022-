
import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn=new Scanner(System.in);
    int n=scn.nextInt();
    int[] nums=new int[n];
    
    for(int i=0;i<n;++i){
        nums[i]=scn.nextInt();
    }
    
    int subsets=(int)Math.pow(2,n);
    
    for(int i=0;i<subsets;++i){
        int temp=i;
        String set="";
        for(int j=n-1;j>=0;--j){
            int rem=temp%2;
            temp=temp/2;
            if(rem==0){
                set="-\t"+set;
            }
            else{
                set=nums[j]+"\t"+set;
            }
        }
        System.out.println(set);
    }
 }

}