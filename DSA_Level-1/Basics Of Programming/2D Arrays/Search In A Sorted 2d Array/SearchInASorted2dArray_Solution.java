
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
    
    int x=scn.nextInt();
    
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        if(nums[i][j]==x){
            System.out.println(i);
            System.out.println(j);
            return;
        }
      }
    }
    
    System.out.println("Not Found");
  }

}