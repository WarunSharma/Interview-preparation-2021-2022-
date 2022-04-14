import java.io.*;
import java.util.*;

class Main {

  public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    
    int ones=~n;
    int twos=ones+1;
    int rsb=n&twos;
    
    System.out.println(Integer.toBinaryString(rsb));

    //write your code here
  }

}