import java.util.*;

public class Main {

	static int solution(String s) {
		int i=-1;
		int j=-1;
		
		Map<Character,Integer> map=new HashMap<>();
		
		int maxLength=0;
		
		while(i<s.length()-1){
			
			while(i<s.length()-1){
				char ch=s.charAt(++i);
				map.put(ch,map.getOrDefault(ch,0)+1);
				
				if(map.get(ch)>1){
					break;
				}
				else{
					int len=i-j;
					maxLength=maxLength<len?len:maxLength;
				}
				
			}
			
			while(j<i){
				char ch=s.charAt(++j);
				
				map.put(ch,map.getOrDefault(ch,0)-1);
				
				if(map.get(ch)==1){
					break;
				}
				else{
					map.remove(ch);
				}
				
			}
		}
		
		return maxLength;
	}
	
	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		String str = scn.next();
		System.out.println(solution(str));
	}

}
