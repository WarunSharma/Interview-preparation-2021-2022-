
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
        
        int dir=0;
        
        int i=0,j=0;
        while(true){
            dir=(dir+nums[i][j])%4;
            
            if(dir==0){
                ++j;
            }
            else if(dir==1){
                ++i;
            }
            else if(dir==2){
                --j;
            }
            else{
                --i;
            }
            
            
            if(i<0){
                ++i;
                break;
            }
            if(j<0){
                ++j;
                break;
            }
            if(i==n){
                --i;
                break;
            }
            if(j==m){
                --j;
                break;
            }
        }
        
        System.out.println(i);
        System.out.println(j);
    }

}