
import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int b = scn.nextInt();
      int dn = getValueInBase(n, b);
      System.out.println(dn);
   }
  
   public static int getValueInBase(int n, int b){
       int result=0;
       int q=0, rem=0, pow=0;
       while(n>0){
           q=n/b;
           rem=n%b;
           result+=rem*(int)Math.pow(10,pow);
           pow++;
           n=q;
       }
       return result;
   }
  }