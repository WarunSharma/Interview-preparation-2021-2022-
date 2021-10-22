
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        String str=scn.nextLine();
        printKPC(str,"");
    }

    static String[] keypad={".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"}; 
    public static void printKPC(String str, String asf) {
        
        if(str.length()==0){
            System.out.println(asf);
            return; 
        }
        
        char code=str.charAt(0);
        String subStr=str.substring(1);
        
        String strCode=keypad[code-'0'];
        for(int i=0;i<strCode.length();++i){
            printKPC(subStr,asf+strCode.charAt(i));
        }
    }

}