
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        String str=scn.nextLine();
        printEncoding(str,"");
    }

    public static void printEncoding(String str,String psf){

    if(str.length()==0){
        System.out.println(psf);
        return;
    }
    else if(str.length()==1){
        char ch=str.charAt(0);
        if(ch=='0'){
            return;
        }
        else{
            
            int num=ch-'0';
            char x=(char)('a'+num-1);
            //System.out.println(x);
            System.out.println(psf+x);
        }
    }
    else{
        char ch=str.charAt(0);
        if(ch=='0'){
            return;
        }
        else{
            int num=ch-'0';
            char x=(char)('a'+num-1);
            printEncoding(str.substring(1),psf+x);
        }

        String ch12=str.substring(0,2);
        int num=Integer.parseInt(ch12);
        char x=(char)('a'+num-1);
        if(x>='a' && x<='z'){
            //System.out.println(x);
            printEncoding(str.substring(2),psf+x);
        }
        
    }
}

}