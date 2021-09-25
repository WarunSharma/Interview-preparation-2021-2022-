
import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int b = scn.nextInt();
    int n1 = scn.nextInt();
    int n2 = scn.nextInt();

    int d = getProduct(b, n1, n2);
    System.out.println(d);
  }

  public static int multiplyByDigit(int b,int n1,int d2) {
    int pow = 0, result = 0;
    int c = 0;
    while (n1 > 0 || c > 0) {
      int d1 = n1 % 10;
      int m = (d1 * d2) + c;
      c = (m / b);
      int rem = m % b;
      result += rem * Math.pow(10, pow);
      n1 = (n1 / 10);
      pow++;
    }

    return result;
  }

  public static int addition(int b,int n1,int n2) {
    int c = 0;
    int pow = 0;
    int res = 0;
    while (c > 0 || n1 > 0 || n2 > 0) {
      int temp1 = n1 % 10, temp2 = n2 % 10;
      res += (int)((c + temp1 + temp2) % b) * Math.pow(10, pow);
      c = ((temp1 + temp2 + c) / b);
      pow++;
      n1 = (n1 / 10);
      n2 = (n2 / 10);
    }

    return res;
  }

  public static int getProduct(int b, int n1, int n2) {
    int res = 0;
    int pow = 0;
    while (n2 > 0) {
      int d2 = n2 % 10;
      int multResult = multiplyByDigit(b, n1, d2);
      multResult =(int) (multResult * Math.pow(10, pow));
      res = addition(b, res, multResult);
      n2 = (n2 / 10);
      pow++;
    }

    return res;
  }

}