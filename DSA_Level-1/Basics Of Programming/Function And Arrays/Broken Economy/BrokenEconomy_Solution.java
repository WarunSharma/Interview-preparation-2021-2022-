
import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn=new Scanner(System.in);
    int n=scn.nextInt();
    int[] nums=new int[n];
    
    for(int i=0;i<n;++i){
        int temp=scn.nextInt();
        nums[i]=temp;
    }
    
    int d=scn.nextInt();
    
    int low=0,high=nums.length-1;
    int mid,floor=Integer.MIN_VALUE,ceil=Integer.MAX_VALUE;
    
    while(low<=high){
        mid=(low+high)/2;
        if(nums[mid]<d){
            low=mid+1;
            floor=nums[mid];
        }
        else if(nums[mid]>d){
            high=mid-1;
            ceil=nums[mid];
        }
        else{
            floor=nums[mid];
            ceil=nums[mid];
        }
    }
    
    System.out.println(ceil);
    System.out.println(floor);
    
    
 }

}