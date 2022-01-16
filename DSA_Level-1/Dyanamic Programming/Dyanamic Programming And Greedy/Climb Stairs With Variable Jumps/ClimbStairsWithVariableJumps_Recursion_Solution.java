
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int[] arr=new int[n];
        
        for(int i=0;i<n;++i){
            arr[i]=scn.nextInt();
        }
        
        int paths=countPaths(arr,0,n);
        System.out.println(paths);
        
    }
    
    public static int countPaths(int[] arr,int idx,int n){
        if(idx==n){
            return 1;
        }
        int count=0;
        
        for(int i=1;i<=arr[idx];++i){
            if(i+idx>n){
                break;
            }
            count+=countPaths(arr,idx+i,n);
        }
        
        return count;
    }

}