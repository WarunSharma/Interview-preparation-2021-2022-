
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int m=scn.nextInt();
        ArrayList<String> res=getMazePaths(1,1,n,m);
        System.out.println(res);
    }

    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static ArrayList<String> getMazePaths(int sr, int sc, int dr, int dc) {
        if(sr==dr && sc==dc){
            ArrayList<String> res= new ArrayList<>();
            res.add("");
            return res;
        }
        else if(sr>dr || sc>dc){
            ArrayList<String> res= new ArrayList<>();
            return res;
        }
        
        ArrayList<String> pathH=new ArrayList<>();
        ArrayList<String> pathV=new ArrayList<>();
        ArrayList<String> pathD=new ArrayList<>();
        
        ArrayList<String> paths=new ArrayList<>();
        
        
        for(int i=1;i<=dc-sc;++i){
            pathH=getMazePaths(sr,sc+i,dr,dc);
            for(String s:pathH){
                paths.add("h"+i+s);
            }
        }
        
        for(int i=1;i<=dr-sr;++i){
            pathV=getMazePaths(sr+i,sc,dr,dc);
            for(String s:pathV){
                paths.add("v"+i+s);
            }
        }
        
        for(int i=1;i<=dr-sr && i<=dc-sc;++i){
            pathD=getMazePaths(sr+i,sc+i,dr,dc);
            for(String s:pathD){
                paths.add("d"+i+s);
            }
        }
        
        return paths;
        
        
    }

}