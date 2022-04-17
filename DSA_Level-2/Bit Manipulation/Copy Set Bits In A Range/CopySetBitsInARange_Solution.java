import java.io.*;
import java.util.*;

class Main {

  public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    int a = scn.nextInt();
    int b = scn.nextInt();
    int left = scn.nextInt();
    int right = scn.nextInt();

    int mask=(1<<(right-left+1))-1;
    mask=mask<<(left-1);
    
    mask=a&mask;
    mask=b|mask;
    
    System.out.println(mask);
    
  }

}