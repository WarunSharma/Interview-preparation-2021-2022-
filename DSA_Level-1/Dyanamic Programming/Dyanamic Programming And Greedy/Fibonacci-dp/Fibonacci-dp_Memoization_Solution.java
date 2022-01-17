
import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn=new Scanner(System.in);
    int n=scn.nextInt();
    int[] fac=new int[n+1];
    System.out.println(factorial(n,fac));
 }

public static int factorial(int n,int[] fac){
    if(n==0){
        return 0;
    }
    
    if(n==1){
        return 1;
    }
    
    if(fac[n]!=0){
        return fac[n];
    }
    
    int fib1=factorial(n-1,fac); 
    int fib2=factorial(n-2,fac);
    
    fac[n]=fib1+fib2;
    
    return fac[n];
 }
}