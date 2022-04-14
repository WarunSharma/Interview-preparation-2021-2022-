import java.io.*;
import java.util.*;

class Main {

  public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    
    int temp=n;
    int count=0;
    while(temp>0){
        int rsb=temp&-temp;
        temp=temp^rsb;
        ++count;
    }

    System.out.println(count);
  }

}