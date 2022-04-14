import java.io.*;
import java.util.*;

class Main {

  public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for(int i = 0 ; i < n; i++){
      arr[i] = scn.nextInt();
    }
    solution(arr);
  }

  public static void solution(int[] arr){
    int res=0;
    
    for(int a:arr){
        res^=a;
    }
    
    int rsb=res&-res;
    
    int setA=0,setB=0;
    
    for(int a:arr){
        int r=rsb&a;
        if(r==0){
            setA^=a;
        }
        else{
            setB^=a;
        }
    }
    
    if(setA<setB){
        System.out.println(setA);
        System.out.println(setB);
    }
    else{
        System.out.println(setB);
        System.out.println(setA);
    }
   
  }

}