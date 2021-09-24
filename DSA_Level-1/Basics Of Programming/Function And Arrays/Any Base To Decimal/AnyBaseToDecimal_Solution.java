
import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int b = scn.nextInt();
      int d = getValueIndecimal(n, b);
      System.out.println(d);
   }
  
   public static int getValueIndecimal(int n, int b){
      // write your code here
      int quo=0,rem=0,pow=0,res=0;
      while(n>0){
          quo=n/10;
          rem=n%10;
          res+=rem*(int)Math.pow(b,pow);
          pow++;
          n=quo;
      }
      
      return res;
   }
  }