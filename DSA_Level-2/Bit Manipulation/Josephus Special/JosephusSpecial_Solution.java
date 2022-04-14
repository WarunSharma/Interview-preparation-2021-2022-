import java.io.*;
import java.util.*;

class Main {

  public static int powerTwo(int n){
      int pow=1;
      while(pow*2<=n){
          pow*=2;
      }
      return pow;
  }        
  public static int solution(int n){
    int l=n-powerTwo(n);
    
    return 2*l+1;
  }
  public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    System.out.println(solution(n));
  }
  

}