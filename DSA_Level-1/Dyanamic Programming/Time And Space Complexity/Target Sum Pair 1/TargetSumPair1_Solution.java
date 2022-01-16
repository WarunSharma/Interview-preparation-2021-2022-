
import java.io.*;
import java.util.*;

public class Main {

  public static void targetSumPair(int[] arr, int target) {
    Arrays.sort(arr);
    int left = 0, right = arr.length - 1;
    int sum;

    while (left < right) {
      sum = arr[left] + arr[right];
      if (sum > target) {
        right--;
      }
      else if (sum < target) {
        left++;
      }
      else {
        System.out.println(arr[left]+", "+arr[right]);  
        left++;
        right--;
      }
    }

  }
  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for (int i = 0 ; i < n; i++) {
      arr[i] = scn.nextInt();
    }
    int target = scn.nextInt();
    targetSumPair(arr, target);
  }

}