
import java.io.*;
import java.util.*;

public class CelebrityProblem_Solution {


    public static void main(String[] args) throws Exception {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[][] arr = new int[n][n];

        for (int j = 0; j < n; j++) {
            String line = br.readLine();
            for (int k = 0; k < n; k++) {
                arr[j][k] = line.charAt(k) - '0';
            }
        }

        findCelebrity(arr);

    }

    public static void findCelebrity(int[][] arr) {
        Stack<Integer> st=new Stack<>();

    for(int i=0; i<arr.length;++i){
        st.push(i);
    }

    while(st.size()>1){
        int first=st.pop();
        int second=st.pop();

        if(arr[first][second]==1){
            st.push(second);
        }
        else{
            st.push(first);
        }
    }

    int potentialCelebrity=st.pop();
    boolean flag=true;

    for(int i=0;i<arr.length;++i){
        if(i==potentialCelebrity){
            continue;
        }

        if(arr[i][potentialCelebrity]!=1 || arr[potentialCelebrity][i]!=0){
            flag=false;
        }

    }

    if(flag==true){
        System.out.println(potentialCelebrity);
    }
    else{
        System.out.println("none");
    }
    }

}