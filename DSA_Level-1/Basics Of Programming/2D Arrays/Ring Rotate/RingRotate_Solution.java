
import java.io.*;
import java.util.*;

public class Main {

  public static void reverse(int[] oneD,int left,int right) {
    while (left < right) {
      int temp = oneD[left];
      oneD[left] = oneD[right];
      oneD[right] = temp;
      ++left;
      --right;
    }
  }

  public static int[] rotate(int[] oneD,int r) {
    r = r % oneD.length;
    if (r < 0) {
      r = r + oneD.length;
    }

    reverse(oneD, 0, oneD.length - r - 1);

    reverse(oneD, oneD.length - r, oneD.length - 1);

    reverse(oneD, 0, oneD.length - 1);


    return oneD;
  }

//console.log(rotate([1,2,3,4,5],3))

  public static int[] findShell(int[][] arr,int s) {
    int minr = s - 1;
    int minc = s - 1;
    int maxr = arr.length - s;
    int maxc = arr[0].length - s;
    int size = 2 * (maxr - minr) + 2 * (maxc - minc);
    int[] oned = new int[size];

    int index = 0;
    for (int i = minr, j = minc; i <= maxr; i++) {
      oned[index] = arr[i][j];
      index++;
    }

    for (int i = maxr, j = minc + 1; j <= maxc; j++) {
      oned[index] = arr[i][j];
      index++;
    }

    for (int i = maxr - 1, j = maxc; i >= minr; i--) {
      oned[index] = arr[i][j];
      index++;
    }

    for (int i = minr, j = maxc - 1; j > minc; j--) {
      oned[index] = arr[i][j];
      index++;
    }

    return oned;

  }

//findShell([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],1);

  public static void fillShell(int[][] nums,int s,int[] oneD) {
    int minr = s - 1;
    int minc = s - 1;
    int maxr = nums.length - s;
    int maxc = nums[0].length - s;
    int size = 2 * (maxr - minr) + 2 * (maxc - minc);

    int index = 0;
    for (int i = minr, j = minc; i <= maxr; i++) {
      nums[i][j]=oneD[index];
      index++;
    }

    for (int i = maxr, j = minc + 1; j <= maxc; j++) {
      nums[i][j]=oneD[index];
      index++;
    }

    for (int i = maxr - 1, j = maxc; i >= minr; i--) {
      nums[i][j]=oneD[index];
      index++;
    }

    for (int i = minr, j = maxc - 1; j > minc; j--) {
      nums[i][j]=oneD[index];
      index++;
    }

  }

  public static void rotateShell(int[][] nums,int s,int r) {

    int[] oneD = findShell(nums, s);
    rotate(oneD, r);
    fillShell(nums, s, oneD);

  }


  public static void main(String[] args) throws Exception {
    Scanner scn=new Scanner(System.in);
    int n=scn.nextInt();
    int m=scn.nextInt();
    int[][] nums=new int[n][m];
    
    for(int i=0;i<n;++i){
        for(int j=0;j<m;++j){
            nums[i][j]=scn.nextInt();
        }
    }
    
    int s=scn.nextInt();
    int r=scn.nextInt();
    
    rotateShell(nums,s,r);
    display(nums);
  }

  public static void display(int[][] arr) {
    for (int i = 0; i < arr.length; i++) {
      for (int j = 0; j < arr[0].length; j++) {
        System.out.print(arr[i][j] + " ");
      }
      System.out.println();
    }
  }

}