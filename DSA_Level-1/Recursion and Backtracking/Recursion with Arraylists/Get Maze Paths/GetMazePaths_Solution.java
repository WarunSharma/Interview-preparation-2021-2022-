
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int m=scn.nextInt();
        ArrayList<String> res=getMazePaths(0,0,n-1,m-1);
        System.out.println(res);
    }

    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static ArrayList<String> getMazePaths(int sr, int sc, int dr, int dc) {
        
        if(sr==dr && sc==dc){
            ArrayList<String> res=new ArrayList<>();
            res.add("");
            return res;
        }
        ArrayList<String> path1=new ArrayList<>();
        ArrayList<String> path2=new ArrayList<>();
        
        ArrayList<String> paths=new ArrayList<>();
        
        if(sr<dr){
            path1=getMazePaths(sr+1,sc,dr,dc); //Vertical moment
        }
        
        if(sc<dc){
            path2=getMazePaths(sr,sc+1,dr,dc); //horizontal moment
        }
        
        for(String s:path2){
            paths.add("h"+s);
        }
        
        for(String s:path1){
            paths.add("v"+s);
        }
        
        return paths;
    }

}