
import java.io.*;
import java.util.*;

public class Main {

	public static String toggleCase(String str){
		String res="";
		
		for(int i=0;i<str.length();++i){
		    char ch=str.charAt(i);
		    int chVal=(int)ch;
		    if(chVal>=97 && chVal<=122){
		        res+=(char)(ch-'a'+'A');
		    }
		    else{
		        res+=(char)(ch-'A'+'a');
		    }
		}

		return res;
	}
	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		String str = scn.next();
		System.out.println(toggleCase(str));
	}

}