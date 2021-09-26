
import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn= new Scanner(System.in);
    int n=scn.nextInt();
    int[] arr=new int[n];
    
    for(int i=0;i<n;++i){
        int temp=scn.nextInt();
        arr[i]=temp;
    }    
    
    int max,min;
    if(arr[0]>arr[1]){
        max=arr[0];
        min=arr[1];
    }
    else{
        max=arr[1];
        min=arr[0];
    }
    
    for(int i=2;i<arr.length;++i){
        if(arr[i]>max){
            max=arr[i];
        }
        
        if(arr[i]<min){
            min=arr[i];
        }
    }
    
    System.out.println(max-min);
 }

}