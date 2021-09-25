
import java.util.*;

public class Main{

public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);

     int num=scn.nextInt();
     int start=(num/2)+1,end=(num/2)+1;
     for(int i=1;i<=num;++i){
         for(int j=1;j<=num;++j){
             if(j==start || j==end){
                System.out.print("*	");
             }
             else{
                System.out.print("	"); 
             }
         }
         if(i>num/2){
             ++start;
             --end;
         }
         else{
             --start;
             ++end;
         }
         
         System.out.println(); 
     }

 }
}