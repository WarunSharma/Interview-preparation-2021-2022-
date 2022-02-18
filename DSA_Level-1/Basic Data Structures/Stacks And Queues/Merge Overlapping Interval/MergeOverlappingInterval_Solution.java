import java.io.*;
import java.util.*;

public class MergeOverlappingInterval_Solution {

    static class Pair implements Comparable<Pair>{
        int start;
        int end;

        public int compareTo(Pair other){
            if(this.start!=other.start){
                return this.start-other.start;
            }
            else{
                return this.end-other.end;
            }
        }
    }

    public static void main(String[] args) throws Exception {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[][] arr = new int[n][2];

        for (int j = 0; j < n; j++) {
            String line = br.readLine();
            arr[j][0] = Integer.parseInt(line.split(" ")[0]);
            arr[j][1] = Integer.parseInt(line.split(" ")[1]);
        }

        mergeOverlappingIntervals(arr);
    }

    public static void mergeOverlappingIntervals(int[][] arr) {
        // merge overlapping intervals and print in increasing order of start time
        Stack<Pair> st=new Stack<>();
        Pair[] pair=new Pair[arr.length];
        
        Arrays.sort(pair);
        for(int i=0;i<arr.length;++i){
            pair[i].start=arr[i][0];
            pair[i].end=arr[i][1];
        }

        for(int i=0;i<arr.length;++i){
            if (i == 0) {
                st.push(pair[i]);
            } else {
                Pair top = st.peek();
                if (pair[i].start > top.end) {
                    st.push(pair[i]);
                } else {
                top.end = Math.max(top.end, pair[i].end);
            }
      }
        }

        Stack<Pair> rs=new Stack<>();

        while(st.size()>0){
            rs.push(st.pop());
        }

        while(rs.size()>0){
            System.out.println(rs.peek().start+" "+rs.peek().end);
            rs.pop();
        }
    }

}