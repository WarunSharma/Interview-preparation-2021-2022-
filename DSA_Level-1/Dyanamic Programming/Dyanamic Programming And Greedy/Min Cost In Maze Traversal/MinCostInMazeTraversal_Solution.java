import java.io.*;
import java.util.*;

class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int m=scn.nextInt();

        int[][] maze=new int[n][m];
        for(int i=0;i<n;++i){
            for(int j=0;j<m;++j){
                maze[i][j]=scn.nextInt();
            }
        }

        int[][] Dp=new int[n][m];
        for(int j=m-1;j>=0;--j){
            for(int i=n-1;i>=0;--i){
                if(i==n-1 && j==m-1){
                    Dp[i][j]=maze[i][j];
                }
                else if(j==m-1){
                    Dp[i][j]=maze[i][j]+Dp[i+1][j];
                }
                else if(i==n-1){
                    Dp[i][j]=maze[i][j]+Dp[i][j+1];
                }
                else{
                    Dp[i][j]=maze[i][j]+Math.min(Dp[i+1][j],Dp[i][j+1]);
                }
            }
        }

        System.out.println(Dp[0][0]);
    }

}