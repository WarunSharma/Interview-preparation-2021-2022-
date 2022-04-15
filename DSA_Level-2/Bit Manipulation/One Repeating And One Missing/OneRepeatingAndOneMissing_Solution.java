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
   List<Integer> newArr=new ArrayList<>();
   
   for(int a:arr){
       newArr.add(a);
   }
   
   for(int i=1;i<=arr.length;++i){
       newArr.add(i);
   }
   
   int res=0;
   
   for(int i=0;i<newArr.size();++i){
       res^=newArr.get(i);
   }
   
   int setA=0,setB=0;
   
   int rsb=res&-res;
   for(int a:newArr){
       int m=a&rsb;
       if(m==0){
           setA^=a;
       }
       else{
           setB^=a;
       }
   }
   
   for(int a:arr){
       if(setA==a){
           System.out.println("Missing Number -> "+setB);
           System.out.println("Repeating Number -> "+setA);
           return;
       }
   }
   
   System.out.println("Missing Number -> "+setA);
   System.out.println("Repeating Number -> "+setB);
   
  }

}