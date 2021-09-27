
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
    
    int max=nums[0];

    for(int i=0;i<nums.length;++i){
        if(nums[i]>max){
            max=nums[i];
        }
    }

    while(max>0){
        for(int j=0;j<nums.length;++j){
            if(nums[j]>=max){
                System.out.print("*\t");
            }
            else{
                System.out.print("\t");
            }
        }
        System.out.println();
        --max;
    }
 }

}