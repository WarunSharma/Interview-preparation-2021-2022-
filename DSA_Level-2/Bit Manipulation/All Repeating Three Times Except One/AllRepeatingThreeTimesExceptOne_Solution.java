import java.io.*;
import java.util.*;

public class Main {

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
   int tn=Integer.MAX_VALUE,tn1=0,tn2=0;
   for(int i=0;i<arr.length;++i){
       int cm=arr[i]&tn;
       int cm1=arr[i]&tn1;
       int cm2=arr[i]&tn2;
       
       tn=tn&(~cm);
       tn1=tn1|cm;
       
       tn1=tn1&(~cm1);
       tn2=tn2|cm1;
       
       tn2=tn2&(~cm2);
       tn=tn|cm2;
   }
   
   System.out.println(tn1);
  }

}