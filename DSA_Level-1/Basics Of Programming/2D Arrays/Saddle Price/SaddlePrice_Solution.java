
import java.io.*;
import java.util.*;

public class Main {

  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[][] nums = new int[n][n];

    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        nums[i][j] = scn.nextInt();
      }
    }

    for (int i = 0; i < nums.length; ++i) {
      int min = nums[i][0];
      int col = 0;
      for (int j = 0; j < nums[i].length; ++j) {
        if (min > nums[i][j]) {
          min = nums[i][j];
          col = j;
        }
      }

      int k = 0;
      while ( k < nums.length && nums[k][col] <= min) {
        ++k;
      }

      if (k == nums.length) {
        System.out.println(min);
        return;
      }

    }

    System.out.println("Invalid input");
  }

}