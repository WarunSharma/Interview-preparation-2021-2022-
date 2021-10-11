
import java.io.*;
import java.util.*;

public class Main {

  public static String compression1(String str) {
    String output = "";
    for (int i = 0; i < str.length(); ++i) {
      while (i < str.length() - 1 && str.charAt(i) == str.charAt(i + 1)) {
        ++i;
      }

      output += str.charAt(i);

    }
    return output;
  }

  public static String compression2(String str) {
    String output = "";
    for (int i = 0; i < str.length(); ++i) {
      int count = 1;
      while (i < str.length() - 1 && str.charAt(i) == str.charAt(i + 1)) {
        ++i;
        count++;
      }

      output += str.charAt(i);
      if (count > 1) {
        output += count;
      }


    }
    return output;
  }
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String str = scn.next();
    System.out.println(compression1(str));
    System.out.println(compression2(str));
  }

}