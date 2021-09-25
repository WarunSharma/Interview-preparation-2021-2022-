
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int num=scn.nextInt();
        
        int start=1, end=num;
        for(int i=1;i<=num;++i){
            for(int j=1;j<=num;++j){
                if(j==start || j==end){
                    System.out.print("*	");
                }
                else{
                    System.out.print("	");
                }
            }
            start++;
            end--;
            System.out.println();
        }

    }
}