import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int[][] nums=new int[n][n];
        
        for(int i=0;i<n;++i){
            for(int j=0;j<n;++j){
                nums[i][j]=scn.nextInt();                
            }
        }
        
        int row=n-1;
        int col=0;
        
        while(true){
            System.out.println(nums[row][col]);
            
            if(row==0 && col==n-1){
                break;
            }
            
            if(n%2==0){
                if((row+col)%2==0){
                    if(row==0 || col==0){
                        if(row==0){
                            col++;
                        }
                        else{
                            row--;
                        }
                    }
                    else{
                        row--;
                        col--;
                    }
            }
            else{
                    if(row==n-1 || col==n-1){
                        if(row==n-1){
                            col++;
                        }
                        else{
                            row--;
                        }
                    }
                    else{
                        row++;
                        col++;
                    }
                }
            }
            else{
                if((row+col)%2==1){
                    if(row==0 || col==0){
                        if(row==0){
                            col++;
                        }
                        else{
                            row--;
                        }
                    }
                    else{
                        row--;
                        col--;
                    }
            }
            else{
                    if(row==n-1 || col==n-1){
                        if(row==n-1 && col==n-1){
                            row--;
                            continue;
                        }
                        if(row==n-1){
                            col++;
                        }
                        else{
                            row--;
                        }
                    }
                    else{
                        row++;
                        col++;
                    }
                }
            }
        }
    }
}


NOTE: Refactoring needed.