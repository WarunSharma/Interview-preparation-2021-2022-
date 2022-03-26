import java.util.*;

public class Main {

	public static ArrayList<Integer> solution(int[] arr, int k) {
		
		ArrayList<Integer> res=new ArrayList<>();
		Map<Integer,Integer> map=new HashMap<>();
		for(int i=0;i<k;++i){
			map.put(arr[i],map.getOrDefault(arr[i],0)+1);
		}

		res.add(map.size());

		for(int i=k;i<arr.length;++i){
			if(map.get(arr[i-k])-1==0){
				map.remove(arr[i-k]);
			}
			else{
				map.put(arr[i-k],map.get(arr[i-k])-1);
			}
			map.put(arr[i],map.getOrDefault(arr[i],0)+1);
			res.add(map.size());
		}
		return res;

	}
	
	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		int[] arr = new int[scn.nextInt()];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = scn.nextInt();
		}
		int k = scn.nextInt();
		ArrayList<Integer> ans = solution(arr,k);
		for(int a : ans){
			System.out.print(a + " ");
		}
	}


}