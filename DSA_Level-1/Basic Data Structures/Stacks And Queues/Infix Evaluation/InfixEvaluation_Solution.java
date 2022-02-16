import java.io.*;
import java.util.*;

public class InfixEvaluation_Solution{
  
    static int precedence(char ch){
        if(ch=='+' || ch=='-'){
            return 1;
        }
        else if(ch=='*' || ch=='/'){
            return 2;
        }
        else{
            return 0;
        }
    }
    
    static int processInfix(Stack<Integer> operandStack,Stack<Integer> operatorStack){
        char op=operatorStack.pop();
        int v2=operandStack.pop();
        int v1=operandStack.pop();
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
        String exp = br.readLine();
    
        Stack<Integer> operandStack=new Stack<>();
        Stack<Character> operatorStack=new Stack<>();
        int sum=0;
        for(int i=0;i<str.length;++i){
            char ch=str.charAt(i);
            if(ch=='('){
                operatorStack.push(ch);
            }
            else if(ch=='0' || ch=='1' || ch=='2' || ch=='3' || ch=='4' || str[i]=='5' 
            || str[i]=='6' || str[i]=='7' || str[i]=='8' || str[i]=='9'){
                operandStack.push(Integer.parseInt(ch-'0'));
            }
            else if(ch==')'){
                while(operatorStack.size()>0 && operatorStack.peek()!='('){
                    int ans=processInfix(operandStack,operatorStack);
                    //console.log(ans);
                    operandStack.push(ans);
                }
                operatorStack.pop();
            }
            else if(ch=='+' || ch=='-' || ch=='*' || ch=='/'){
                while(operatorStack.size()>0 && operatorStack.peek()!='(' && precedence(str[i])<=precedence(operatorStack.peek())){
                    int ans=processInfix(operandStack,operatorStack);
                    //console.log(ans);
                    operandStack.push(ans);
                }
                operatorStack.push(ch);
            }
            else{
    
            }
        }
        
        while(operandStack.size()>1){
            int ans=processInfix(operandStack,operatorStack);
            operandStack.push(ans);
        }
    
        System.out.println(operandStack.peek());
     }
    }