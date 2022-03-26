import java.io.*;
import java.util.*;

class Main {

  public static int solution(String root,HashMap<String,
  ArrayList<String>> map,HashMap<String,Integer> res){

    if(map.containsKey(root)==false){
      res.put(root,0);
      return 1;
    }
    int sz=0;
    for(String ch : map.get(root)){
      sz+=solution(ch,map,res);
    }

    res.put(root,sz);
    return sz+1;
  }
  public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    int n = Integer.parseInt(scn.nextLine());
    //write your code here

    String  root= "";

    HashMap<String,ArrayList<String>> map=new HashMap<>();
    for(int i=0;i<n;++i){
      String[] parts=scn.nextLine().split(" ");
      if(parts[1].equals(parts[0])){
        root=parts[1];
      }
      else if(map.containsKey(parts[1])==true){
        ArrayList<String> temp=map.get(parts[1]);
        temp.add(parts[0]);
        map.put(parts[1],temp);
      }
      else{
        ArrayList<String> temp=new ArrayList<>();
        temp.add(parts[0]);
        map.put(parts[1],temp);
      }
    }

    HashMap<String,Integer> res=new HashMap<>();
    solution(root,map,res);

    for(String key:res.keySet()){
      System.out.println(key+" "+res.get(key));
    }
  }

}