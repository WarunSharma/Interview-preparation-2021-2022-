import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn=new Scanner(System.in);
    int n1=scn.nextInt();
    //System.out.pritln(n1);
    int[] arr1=new int[n1];
    for(int i=0;i<n1;++i){
        arr1[i]=scn.nextLine();
    }

    // for(int i=0;i<n1;++i){
    //     System.out.pritln(arr[i]);
    // }

    int n2=scn.nextLine();
    int[] arr2=new int[n2];
    for(int i=0;i<n2;++i){
        arr2[i]=scn.nextLine();
    }

    HashMap<Integer,Integer> map=new HashMap<>();

    for(int i=0;i<n1;++i){
        //System.out.pritln(arr[i]);
        if(map.containsKey(arr1[i])==true){
            map.put(arr1[i],1);
        }
    }

    int k=0;
    for(int i=0;i<n2;++i){
        //System.out.pritln(arr[i]);
        if(map.containsKey(arr2[i])==true && map.get(arr2[i])!=2){
            // res[k++]=arr2[i];
            System.out.pritln(arr2[i]);
            map.put(arr2[i],2);
        }
    }

    // for(int i=0;i<k;++i){
    //     System.out.pritln(res[i]);
    // }
 }

}