import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        String str=scn.nextLine();
        //System.out.println(str);

        HashMap<Character,Integer> map=new HashMap<>();

        for(int i=0;i<str.length();++i){
            if(map.containsKey(str.charAt(i))){
                Integer val=map.get(str.charAt(i));
                map.put(str.charAt(i),val+1);
            }
            else{
                map.put(str.charAt(i),1);
            }
        }

        //Set<char> keys=map.keySet();
        int max=0;
        char result=str.charAt(0);
        for(char ch:map.keySet()){
            if(max<map.get(ch)){
                max=map.get(ch);
                result=ch;
            }
        }

        System.out.println(result);
    }

}