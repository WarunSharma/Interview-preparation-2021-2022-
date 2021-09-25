import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n=scn.nextInt();
        for(int row=n;row>0;--row){
            for(int col=row;col>0;--col){
                System.out.print("*	");
            }
            System.out.println();
        }

    }
}