import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int b = scn.nextInt();
    int n1 = scn.nextInt();
    int n2 = scn.nextInt();

    int d = getSum(b, n1, n2);
    System.out.println(d);
  }

  public static int getSum(int b, int n1, int n2) {
    int c = 0;
    int pow = 0;
    int res = 0;
    while (c > 0 || n1 > 0 || n2 > 0) {
      int temp1 = n1 % 10, temp2 = n2 % 10;
      res += ((c + temp1 + temp2) % b) * Math.pow(10, pow);
      c = (int)(temp1 + temp2 + c) / b;
      pow++;
      n1 = (int)n1 / 10;
      n2 = (int)n2 / 10;
    }

    return res;
  }
}