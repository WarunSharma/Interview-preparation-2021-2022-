import java.util.*;

class Main {
	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		int noofpairs_src_des = scn.nextInt();
		HashMap<String, String> map = new HashMap<>();
		for (int i = 0; i < noofpairs_src_des; i++) {
			String s1 = scn.next();
			String s2 = scn.next();
			map.put(s1, s2);	
		}

		HashMap<String, Boolean> sourceTracker = new HashMap<>();

		for(String str : map.keySet()){
			sourceTracker.put(map.get(str),false);
			if(sourceTracker.containsKey(str)==false){
				sourceTracker.put(str,true);
			}
			
		}

		String root="";
		for(String str : sourceTracker.keySet()){
			if(sourceTracker.get(str)==true){
				root=str;
			}
		}


		System.out.print(root+" -> ");
		int i=1;
		while(true){
			if(i==noofpairs_src_des){
				System.out.print(map.get(root)+".");
				break;
			}
			else{
				System.out.print(map.get(root)+" -> ");
			}
			root=map.get(root);
			++i;
		}

		//write your code here


	}
}