import java.io.*;
import java.util.*;

public class MinimumStack1_Solution {

  public static class MinStack {
    Stack<Integer> dataStack;
    Stack<Integer> minStack;

    public MinStack() {
      dataStack = new Stack<>();
      minStack = new Stack<>();
    }


    int size() {
      return this.dataStack.size();
    }

    void push(int val) {

        if(this.minStack.size()==0){
            this.minStack.push(val);
        }
        else{
            if(this.minStack.peek()>val){
                this.minStack.push(val);
            }
        }

        this.dataStack.push(val);
    }

    int pop() {
      if(this.size()==0){
            System.out.println("Stack underflow");
            return -1;
        }
        if(this.dataStack.peek()==this.minStack.peek()){
            this.minStack.pop();
        }

        return this.dataStack.pop();
    }

    int top() {
      if(this.size()==0){
        System.out.println("Stack underflow");
        return -1;
        }

        return this.dataStack.peek();
    }

    int min(){
  	  if(this.size()==0){
        System.out.println("Stack underflow");
        return -1;
        }

        return this.minStack.peek();
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    MinStack st = new MinStack();

    String str = br.readLine();
    while(str.equals("quit") == false){
      if(str.startsWith("push")){
        int val = Integer.parseInt(str.split(" ")[1]);
        st.push(val);
      } else if(str.startsWith("pop")){
        int val = st.pop();
        if(val != -1){
          System.out.println(val);
        }
      } else if(str.startsWith("top")){
        int val = st.top();
        if(val != -1){
          System.out.println(val);
        }
      } else if(str.startsWith("size")){
        System.out.println(st.size());
      } else if(str.startsWith("min")){
        int val = st.min();
        if(val != -1){
          System.out.println(val);
        }
      }
      str = br.readLine();
    }
  }
}