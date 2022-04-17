import java.io.*;
import java.util.*;

class Main {

  public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    int a = scn.nextInt();
    int b = scn.nextInt();

    int flippedBits=a^b;
    int count=0;
    while(flippedBits!=0){
        int rsb=flippedBits&-flippedBits;
        flippedBits=flippedBits-rsb;
        ++count;
    }
    
    System.out.println(count);
  }

}