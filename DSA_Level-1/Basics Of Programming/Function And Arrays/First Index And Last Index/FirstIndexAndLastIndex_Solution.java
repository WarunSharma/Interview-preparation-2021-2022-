
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
    
    int d=scn.nextInt();
    
    int firstIdx=firstIndex(nums,d);
    int lastIdx=lastIndex(nums,d);
    
    System.out.println(firstIdx);
    System.out.println(lastIdx);
 }
 
 public static int firstIndex(int[] nums,int d){
    int low=0,high=nums.length-1;
    int mid,res=-1;;
    while(low<=high){
        mid=((low+high)/2);
        if(nums[mid]>d){
            high=mid-1;
        }
        else if(nums[mid]<d){
            low=mid+1;
        }
        else{
            high=mid-1;
            res=mid;
        }
    }

    return res;
}

public static int lastIndex(int[] nums,int d){
    int low=0,high=nums.length-1;
    int mid,res=-1;;
    while(low<=high){
        mid=((low+high)/2);
        if(nums[mid]>d){
            high=mid-1;
        }
        else if(nums[mid]<d){
            low=mid+1;
        }
        else{
            low=mid+1;
            res=mid;
        }
    }

    return res;
}

}