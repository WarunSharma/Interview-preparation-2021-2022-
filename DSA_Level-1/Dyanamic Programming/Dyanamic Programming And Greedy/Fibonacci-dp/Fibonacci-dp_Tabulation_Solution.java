

import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn=new Scanner(System.in);
    int n=scn.nextInt();
    System.out.println(factorial(n));
 }

public static int factorial(int n){
    int[] fact=new int[n+1];
    fact[0]=0;
    fact[1]=1;
    
    for(int i=2;i<=n;++i){
        fact[i]=fact[i-1]+fact[i-2];
    }
    
    return fact[n];
 }
}