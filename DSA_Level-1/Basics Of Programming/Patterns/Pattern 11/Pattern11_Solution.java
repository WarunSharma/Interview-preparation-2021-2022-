import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        // write ur code here
        int num=scn.nextInt();
        int n=1;
        for(int i=1;i<=num;++i){
            for(int j=1;j<=i;++j){
                System.out.print((n)+"	");
                n++;
            }
            System.out.println();
        }

    }
}