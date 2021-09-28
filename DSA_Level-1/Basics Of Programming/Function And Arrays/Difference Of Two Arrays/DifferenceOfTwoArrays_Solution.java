
import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    
    Scanner scn=new Scanner(System.in);
    int n1=scn.nextInt();
    
    int[] a1=new int[n1];
    
    for(int i=0;i<n1;++i){
        int temp=scn.nextInt();
        a1[i]=temp;
    }
    
    int n2=scn.nextInt();
    
    int[] a2=new int[n2];
    
    for(int i=0;i<n2;++i){
        int temp=scn.nextInt();
        a2[i]=temp;
    }
    
    int c=0;
    int[] res=new int[n2];

    while(n1>0 || n2>0){
        int d1=0;
        int d2=0;
        int diff;
        if(n1>0){
            d1=a1[n1-1];
        }
        if(n2>0){
            d2=a2[n2-1];
        }

        d2+=c;
        
        if(d1>0){
            if(d2<d1){
                diff=d2+10-d1;
                c=-1;
            }
            else{
                diff=d2-d1;
                c=0;
            }
        }
        else{
                diff=d2;
                c=0;
        }

        res[n2-1]=diff;
        n1--;
        n2--;
    }

    int i=0;
    while(res[i]==0){
        ++i;
    }

    while(i<res.length){
        System.out.println(res[i]);
        ++i;
    }
 }

}