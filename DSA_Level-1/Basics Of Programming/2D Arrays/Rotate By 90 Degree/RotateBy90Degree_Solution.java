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
    
    rotate90(nums);
    display(nums);
  }
  
  public static void rotate90(int[][] nums){
      //Transpose

    for (int i = 0; i < nums.length; ++i) {
      for (int j = i; j < nums[i].length; ++j) {
        int temp = nums[i][j];
        nums[i][j] = nums[j][i];
        nums[j][i] = temp;
      }
    }


    //Reverse

    for (int i = 0; i < nums.length; ++i) {
      int left = 0, right = nums[i].length - 1;
      while (left < right) {
        int temp = nums[i][left];
        nums[i][left] = nums[i][right];
        nums[i][right] = temp;
        ++left;
        --right;
      }
    }
  }

  public static void display(int[][] nums) {
    for (int i = 0; i < nums.length; i++) {
      for (int j = 0; j < nums[0].length; j++) {
        System.out.print(nums[i][j] + " ");
      }
      System.out.println();
    }
  }

}