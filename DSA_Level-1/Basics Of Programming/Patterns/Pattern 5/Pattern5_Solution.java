
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int num=scn.nextInt();
        int sp=num/2,st=1;
        
        for(int i=1;i<=num;++i){
            for(int j=1;j<=sp;++j){
                System.out.print("	");
            }
            for(int j=1;j<=st;++j){
                System.out.print("*	");
            }
            if(i<=num/2){
                sp--;
                st+=2;
            }
            else{
                sp++;
                st-=2;
            }
            System.out.println();
        }

    }
}