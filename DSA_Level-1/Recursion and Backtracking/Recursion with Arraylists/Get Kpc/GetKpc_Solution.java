
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        String str=scn.nextLine();
        ArrayList<String> res=getKPC(str);
        System.out.println(res);
    }

    static String[] keypad={".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"};

    public static ArrayList<String> getKPC(String str) {
        
        if(str.length()==0){
            ArrayList<String> res=new ArrayList<String>();
            res.add("");
            return res;
        }
        
        char ch=str.charAt(0);
        String subStr=str.substring(1);
        ArrayList<String> thatRes=getKPC(subStr);
        ArrayList<String> thisRes=new ArrayList<>();
        
        String keypadCode=keypad[ch-'0'];
        
        for(int i=0;i<keypadCode.length();++i){
            char chmod=keypadCode.charAt(i);
            for(String s:thatRes){
                thisRes.add(chmod+s);
            }
        }
        
        return thisRes;
    }

}