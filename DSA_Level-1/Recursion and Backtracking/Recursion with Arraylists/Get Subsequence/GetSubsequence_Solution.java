
import java.io.*;
import java.util.*;

public class Main {

  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    String str = scn.next();
    ArrayList< String> res = gss(str);
    System.out.println(res);
  }

  public static ArrayList<String> gss(String str) {

    if (str.length() == 0) {
      ArrayList<String> empty = new ArrayList<String>();
      empty.add("");
      return empty;
    }

    char ch = str.charAt(0);
    String subStr = str.substring(1);

    ArrayList<String> thatRes = gss(subStr);
    ArrayList<String> thisRes = new ArrayList<>();

    for (String s : thatRes) {
      thisRes.add("" + s);
    }

    for (String s : thatRes) {
      thisRes.add(ch + s);
    }

    return thisRes;
  }

}