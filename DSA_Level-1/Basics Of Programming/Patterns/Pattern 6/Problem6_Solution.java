
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int num=scn.nextInt();
        int st=num/2,sp=1;
        for(int i=1;i<=num;++i){
            System.out.print("*	");
            
            for(int j=1;j<=st;++j){
                System.out.print("*	");
            }
            
            for(int j=1;j<=sp;++j){
                System.out.print("	");
            }
            
            for(int j=1;j<=st;++j){
                System.out.print("*	");
            }
            
            System.out.print("*	");
            System.out.println("");
            
            if(i<=num/2){
                sp+=2;
                st--;
            }
            else{
                sp-=2;
                st++;
            }
        }

    }
}