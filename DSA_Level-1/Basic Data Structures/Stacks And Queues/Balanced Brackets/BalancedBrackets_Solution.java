import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn=new Scanner(System.in);
        String str=scn.nextLine();
        //System.out.println(str);
        Stack<Character> st=new Stack<>();
        for(int i=0;i<str.length();++i){
            char ch=str.charAt(i);
            if(ch=='(' || ch=='{' || ch=='['){
                st.push(ch);
            }
            else if(ch==')' || ch=='}' || ch==']'){
                boolean val=handleCasing(ch,st);
                if(val==true){
                    st.pop();
                }
                else{
                    System.out.println("false");
                    return;
                }
            }
        }
        
        if(st.size()==0){
            System.out.println("true");
        }
        else{
            System.out.println("false");
        }
    }
    
    public static boolean handleCasing(char ch, Stack<Character> st){
        //System.out.println(ch);
        if(st.size()==0){
            return false;
        }
        else{
            if(ch==')' && st.peek()=='('){
                return true;
            }
            else if(ch==']' && st.peek()=='['){
                return true;
            }
            else if(ch=='}' && st.peek()=='{'){
                return true;
            }
            else{
                return false;
            }
        }
    }

}