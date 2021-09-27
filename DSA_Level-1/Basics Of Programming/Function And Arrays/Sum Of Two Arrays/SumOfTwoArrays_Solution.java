import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn=new Scanner(System.in);
    int n1=scn.nextInt();
    
    int[] arr1=new int[n1];
    for(int i=0;i<n1;++i){
        int temp=scn.nextInt();
        arr1[i]=temp;
    }
    int n2=scn.nextInt();
    int[] arr2=new int[n2];
    for(int i=0;i<n2;++i){
        int temp=scn.nextInt();
        arr2[i]=temp;
    }
    
    int c=0;
    int idx;
    if(n1>n2){
        idx=n1;
    }
    else{
        idx=n2;
    }
    int[] res=new int[idx];
    int tempIdx=idx;
    while(idx>0){
        int sum;
        if(n1>0 && n2>0){
            sum=arr1[n1-1]+arr2[n2-1]+c;
        }
        else if(n1>0 && n2<=0){
            sum=arr1[n1-1]+c;
        }
        else{
            sum=arr2[n2-1]+c;
        }
        
        
        if(idx!=1){
            c=sum/10;
            res[idx-1]=sum%10;
        }
        else{
            res[idx-1]=sum;
        }
        
        --idx;
        --n1;
        --n2;
    }
    
    for(int i=0;i<tempIdx;++i){
        System.out.println(res[i]);
    }
 }

}