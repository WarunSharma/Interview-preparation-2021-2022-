import java.io.*;
import java.util.*;

class Main {

  public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int i = scn.nextInt();
    int j = scn.nextInt();
    int k = scn.nextInt();
    int m = scn.nextInt();
    
    int bm=1<<i;
    int res=n|bm;
    System.out.println(res);
    
    bm=1<<j;
    int nbm=~bm;
    res=n&nbm;
    System.out.println(res);
    
    int togglebm=1<<k;
    res=n^togglebm;
    System.out.println(res);
    
    bm=1<<m;
    res=n&bm;
    if(res==0){
        System.out.println(false);
    }
    else{
        System.out.println(true);
    }
    
    //write your code here
  }

}