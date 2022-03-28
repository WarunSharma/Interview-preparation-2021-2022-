import java.util.*;

class Main {

	public static int solution(String str){
		Set<Character> set=new HashSet<>();

		for(int i=0;i<str.length();++i){
			set.add(str.charAt(i));
		}

		Map<Character,Integer> map=new HashMap<>();
		int i=-1;
		int j=-1;
		int count=0;
		int dCount=set.size();

		String ans = "", pans="";
		while(true){
			
			boolean loop1=false,loop2=false;
			
			while(i<str.length()-1 && count!=dCount){
				++i;
				char ch=str.charAt(i);
				map.put(ch,map.getOrDefault(ch,0)+1);

				if(map.get(ch)==1){
					count++;
				}

				loop1=true;
			}

			while(j<i && count==dCount){
				pans=str.substring(++j,i+1);
				if(ans=="" || pans.length()<ans.length()){
					ans=pans;
				}

				char ch=str.charAt(j);
				if(map.get(ch)==1){
					map.remove(ch);
				}
				else{
					map.put(ch,map.getOrDefault(ch,0)-1);
				}

				if(map.containsKey(ch)==false){
					count--;
				}

				loop2=true;
			}

			if(loop1==false && loop2==false){
				break;
			}

		}

		return ans.length();
	}
	
	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		String str = scn.next();
		System.out.println(solution(str));
	}

}