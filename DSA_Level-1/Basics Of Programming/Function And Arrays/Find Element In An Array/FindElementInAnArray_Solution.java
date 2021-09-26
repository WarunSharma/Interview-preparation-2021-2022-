
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
    int d=scn.nextInt();
    
    int idx=-1;
    for(int i=0;i<n;++i){
        if(d==arr[i]){
            idx=i;
            break;
        }
    }  
    
    System.out.println(idx);
 }

}