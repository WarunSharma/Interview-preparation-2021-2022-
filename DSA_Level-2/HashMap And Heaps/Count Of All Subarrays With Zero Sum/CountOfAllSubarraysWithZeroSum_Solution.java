import java.util.*;

public class Main {

	public static int solution(int[] arr) {
		Map<Integer,Integer> map=new HashMap<>();
		int sum=0;
		map.put(sum,1);
		int count=0;

		for(int a : arr){
			sum+=a;
			if(map.containsKey(sum)==true){
				count+=map.get(sum);
			}

			map.put(sum,map.getOrDefault(sum,0)+1);
		}

		return count;
	}
	
	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		int[] arr = new int[n];
		for (int i = 0; i < n; i++) {
			arr[i] = scn.nextInt();
		}
		System.out.println(solution(arr));

	}

}