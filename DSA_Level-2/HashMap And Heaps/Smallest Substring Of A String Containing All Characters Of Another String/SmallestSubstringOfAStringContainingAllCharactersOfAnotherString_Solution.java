import java.util.*;

class Main {

	public static String solution(String s1, String s2){
		String ans = "";
		Map<Character,Integer> map2=new HashMap<>();

		for(int i=0;i<s2.length();++i){
			char ch=s2.charAt(i);
			map2.put(ch,map2.getOrDefault(ch,0)+1);
		}

		Map<Character,Integer> map1=new HashMap<>();
		int ml=0;
		int dml=s2.length();

		int i=0;
		int j=-1;
		while(true){
			boolean traverse1=false,traverse2=false;

			//Acquire
			while(i<s1.length() && ml!=dml){
				char ch=s1.charAt(i);
				map1.put(ch,map1.getOrDefault(ch,0)+1);

				if(map1.getOrDefault(ch,0)<=map2.getOrDefault(ch,0)){
					++ml;
				}
				++i;
				//System.out.println(ch+";");
				traverse1=true;
			}

			//Release
			while(j<i && ml==dml){
				String pans=s1.substring(++j,i);
				if(ans=="" || pans.length()<ans.length()){
					ans=pans;
				}
				char ch=s1.charAt(j);
				if(map1.get(ch)==1){
					map1.remove(ch);
				}
				else{
					map1.put(ch,map1.get(ch)-1);
				}

				if(map1.getOrDefault(ch,0)<map2.getOrDefault(ch,0)){
					--ml;
				}

				traverse2=true;
			}

			if(traverse1==false && traverse2==false)
				break;
		}
		
		return ans;
	}

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		String s1 = scn.next();
		String s2 = scn.next();
		System.out.println(solution(s1,s2));
	}

}