import java.io.*;
import java.util.*;

public class PostfixEvaluationAndConversions_Solution{
  
public static int process(int v1,int v2,char op){
    //console.log(`${v1}${op}${v2}`);
    if(op=='+'){
        return v1+v2;
    }
    else if(op=='-'){
        return v1-v2;
    }
    else if(op=='*'){
        return v1*v2;
    }
    else{
        return v1/v2;
    }

}    

public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String str = br.readLine();

    // code
    Stack<Integer> valueStack=new Stack<>();
    Stack<String> infixStack=new Stack<>();
    Stack<String> prefixStack=new Stack<>();
    for(int i=0;i<str.length();++i){
        char ch=str.charAt(i);
        if(ch=='+' || ch=='-' || ch=='*' || ch=='/'){
            int val2=valueStack.pop();
            int val1=valueStack.pop();
            int ans=process(val1,val2,ch);
            valueStack.push(ans);

            String valS2=infixStack.pop();
            String valS1=infixStack.pop();
            String ansS="("+valS1+ch+valS2+")";
            infixStack.push(ansS);

            valS2=prefixStack.pop();
            valS1=prefixStack.pop();
            ansS=""+ch+valS1+valS2;
            prefixStack.push(ansS);
        }
        else{
            valueStack.push(ch-'0');
            infixStack.push(ch+"");
            prefixStack.push(ch+"");
        }
    }

    System.out.println(valueStack.peek());
    System.out.println(infixStack.peek());
    System.out.println(prefixStack.peek());
 }
}