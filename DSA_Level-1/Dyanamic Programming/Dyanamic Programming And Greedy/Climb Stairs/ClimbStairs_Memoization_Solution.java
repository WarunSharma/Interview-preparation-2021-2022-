
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int[] dp=new int[n+1];
        System.out.println(climbStairs(n,dp));
    }
    
    public static int climbStairs(int n,int[] dp){
        
        if(n==0){
            return 1;
        }
        else if(n<0){
            return 0; 
        }
        
        if(dp[n]!=0){
            return dp[n];
        }
        
        int c1=climbStairs(n-1,dp);
        int c2=climbStairs(n-2,dp);
        int c3=climbStairs(n-3,dp);
        
        dp[n]=c1+c2+c3;
        
        return dp[n];
    }

}