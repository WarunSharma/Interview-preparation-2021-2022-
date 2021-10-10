
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int val=0;
        
        int total=n*n;
        int count=0;
        
        for(int i=0;i<n;++i){
            for(int j=1;j<=n;++j){
                System.out.print((val*n+j)+" ");
            }
            System.out.println();
            
            if(n%2==1){
                if(val+1==n){
                val--;
                }
                else if(val%2==0){
                    val+=2;
                }
                else{
                    val-=2;
                }
            }
            else{
                if(val+2==n){
                    val++;
                }
                else if(val%2==0){
                    val+=2;
                }
                else{
                    val-=2;
                }
            }
        }
    }
}