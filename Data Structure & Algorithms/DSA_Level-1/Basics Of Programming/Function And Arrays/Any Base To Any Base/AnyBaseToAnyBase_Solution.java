
import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int sourceBase = scn.nextInt();
    int  destBase = scn.nextInt();

    int dec = 0, quo = 0, rem = 0, pow = 0,res=0;
     while(n>0){
         quo=n/10;
         rem=n%10;
         dec+=rem*(int)Math.pow(sourceBase,pow);
         pow++;
         n=quo;
     }
     
     pow=0;
     while(dec>0){
         quo = (dec / destBase);
        
        rem = dec % destBase;
        res += rem * Math.pow(10, pow);
        pow++;
        dec = quo;
     }
    System.out.println(res);
  }
}