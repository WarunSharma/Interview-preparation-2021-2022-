
import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);

    // write ur code here
    int num=scn.nextInt();
    int sp = num / 2, st = 1;
    int n = 1;
    for (int i = 1; i <= num; ++i) {
      int temp = n;
      for (int j = 1; j <= sp; ++j) {
        System.out.print("	");
      }
      for (int j = 1; j <= st; ++j) {
        //process.stdout.write('*	');
        System.out.print(n + "	");
        if (j > st / 2) {
          --n;
        }
        else {
          ++n;
        }
      }

      n = temp;
      if (i > num / 2) {
        ++sp;
        st -= 2;
        --n;
      }
      else {
        --sp;
        st += 2;
        ++n;
      }
      System.out.println();
    }
  }
}