
import java.io.*;
import java.util.*;

public class Main {

  public static int findPivot(int[] arr) {
    int low=0,high=arr.length-1;
    while(low<high){
        int mid=(low+high)/2;
        if(arr[mid]>arr[high]){
            low=mid+1;
        }
        else{
            high=mid;
        }
    }
    
    return arr[low];
  }

  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }
    int pivot = findPivot(arr);
    System.out.println(pivot);
  }

}