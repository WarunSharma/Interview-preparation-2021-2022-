import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    
    Scanner scn=new Scanner(System.in);
    int n=scn.nextInt();
    int[] nums=new int[n];
        
    for(int i=0;i<n;++i){
        int temp=scn.nextInt();
        nums[i]=temp;  
    }
    
    for(int i=0;i<=nums.length-1;++i){
        for(int k=i;k<=nums.length-1;++k){
            for(int j=i;j<=k;++j){
                System.out.print(nums[j]+"\t");
            }
            System.out.println();
        }
        
    }
 }

}