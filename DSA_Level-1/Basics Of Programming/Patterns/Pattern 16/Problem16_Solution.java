import java.util.*;

public class Main{

public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int num=scn.nextInt();
    for(int i=1;i<=num;++i){
        int start=1,spaces=(2*num)-(2*i)-1;
        for(int j=1;j<=i;++j){
            System.out.print(start+"	");
            if(j!=i)
            start++;
        }
        
        for(int j=1;j<=spaces;++j){
            System.out.print("	");
        }
        
        if(start==num){
            start--;
        }
        
        for(int j=1;j<=i;++j){
            if(j!=num)
            {
                System.out.print(start+"	");
                start--;
            }
        }
        
        System.out.println();
    }
 }
}