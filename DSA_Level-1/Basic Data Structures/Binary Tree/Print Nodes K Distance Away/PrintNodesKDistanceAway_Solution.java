import java.io.*;
import java.util.*;

public class Main {
  public static class Node {
    int data;
    Node left;
    Node right;

    Node(int data, Node left, Node right) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }

  public static class Pair {
    Node node;
    int state;

    Pair(Node node, int state) {
      this.node = node;
      this.state = state;
    }
  }

  public static Node construct(Integer[] arr) {
    Node root = new Node(arr[0], null, null);
    Pair rtp = new Pair(root, 1);

    Stack<Pair> st = new Stack<>();
    st.push(rtp);

    int idx = 0;
    while (st.size() > 0) {
      Pair top = st.peek();
      if (top.state == 1) {
        idx++;
        if (arr[idx] != null) {
          top.node.left = new Node(arr[idx], null, null);
          Pair lp = new Pair(top.node.left, 1);
          st.push(lp);
        } else {
          top.node.left = null;
        }

        top.state++;
      } else if (top.state == 2) {
        idx++;
        if (arr[idx] != null) {
          top.node.right = new Node(arr[idx], null, null);
          Pair rp = new Pair(top.node.right, 1);
          st.push(rp);
        } else {
          top.node.right = null;
        }

        top.state++;
      } else {
        st.pop();
      }
    }

    return root;
  }

  public static void display(Node node) {
    if (node == null) {
      return;
    }

    String str = "";
    str += node.left == null ? "." : node.left.data + "";
    str += " <- " + node.data + " -> ";
    str += node.right == null ? "." : node.right.data + "";
    System.out.println(str);

    display(node.left);
    display(node.right);
  }

  public static ArrayList<Node> pathNodeToRoot(Node node, int data){
      
    if(node==null){
        return new ArrayList<Node>();
    }
    
    if(node.data==data){
        ArrayList<Node> res=new ArrayList<Node>();
        res.add(node);
        return res;
    }
      
    ArrayList<Node> leftPath=pathNodeToRoot(node.left,data);
    ArrayList<Node> rightPath=pathNodeToRoot(node.right,data);
    
    if(leftPath.size()>0){
        leftPath.add(node);
        return leftPath;
    }
    
    if(rightPath.size()>0){
        rightPath.add(node);
        return rightPath;
    }
    
    return new ArrayList<Node>(); 
         
  }   

  public static void printKLevelDown(Node node, int k, Node blocker){
      
      if(node==null || k<0 || node==blocker){
          return;
      }
      
      if(k==0){
          System.out.println(node.data);
      }
      
      printKLevelDown(node.left,k-1,blocker);
      printKLevelDown(node.right,k-1,blocker);
  }                    

  public static void printKNodesFar(Node node, int data, int k) {
    ArrayList<Node> paths=pathNodeToRoot(node,data);
    
    for(int i=0;i<paths.size();++i){
        //System.out.println(paths.get(i).data);
        printKLevelDown(paths.get(i),k-i,i>0?paths.get(i-1):null);
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    Integer[] arr = new Integer[n];
    String[] values = br.readLine().split(" ");
    for (int i = 0; i < n; i++) {
      if (values[i].equals("n") == false) {
        arr[i] = Integer.parseInt(values[i]);
      } else {
        arr[i] = null;
      }
    }

    int data = Integer.parseInt(br.readLine());
    int k = Integer.parseInt(br.readLine());

    Node root = construct(arr);
    // ArrayList<Node> paths=pathNodeToRoot(root,data);
    // for(Node d : paths){
    //     System.out.println(d.data);
    // }
    printKNodesFar(root, data, k);
  }

}