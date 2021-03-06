
import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int b = scn.nextInt();
    int n1 = scn.nextInt();
    int n2 = scn.nextInt();

    int d = getDifference(b, n1, n2);
    System.out.println(d);
  }

  public static int getDifference(int b, int n1, int n2) {
    int c = 0;
    int pow = 0;
    int res = 0;
    while (n2 > 0) {
      int d1 = (n1 % 10);
      int d2 = (n2 % 10)+c;
      if (d2 < d1) {
        d2 = d2 + b - d1;
        res += d2 * Math.pow(10, pow);
        c = -1;
      }
      else {
        d2 = d2 - d1;
        res += d2 * Math.pow(10, pow);
        c=0;
      }
      pow++;
      n1 = n1 / 10;
      n2 = n2 / 10;
    }
    return res;
  }

}
