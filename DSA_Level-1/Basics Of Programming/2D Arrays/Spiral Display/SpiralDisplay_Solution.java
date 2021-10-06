
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int m=scn.nextInt();
        
        int nums[][]=new int[n][m];
        
        for(int i=0;i<n;++i){
            for(int j=0;j<m;++j){
                nums[i][j]=scn.nextInt();
            }
        }
        
        int count=0, printCount=n*m;
        
        int minRow=0;
        int maxRow=n-1;
        int minCol=0;
        int maxCol=m-1;
        
        while(count<printCount){
            if(count<printCount){
                for(int i=minRow;i<=maxRow;++i){
                    System.out.println(nums[i][minCol]);
                    ++count;
                }
                minCol++;
            }
            
            if(count<printCount){
                for(int i=minCol;i<=maxCol;++i){
                    System.out.println(nums[maxRow][i]);
                    ++count;
                }
                maxRow--;
            }
            
            if(count<printCount){
                for(int i=maxRow;i>=minRow;--i){
                     System.out.println(nums[i][maxCol]);
                    ++count;
                }
                --maxCol;
            }
            
            if(count<printCount){
                for(int i=maxCol;i>=minCol;--i){
                    System.out.println(nums[minRow][i]);
                    ++count;                    
                }
                minRow++;
            }
        }
    }

}