import java.util.*;

class Main {
	
	public static int solution(int[] arr) {
		
		Map<Integer,Integer> map=new HashMap<>();
		map.put(0,-1);

		int maxLength=0,sum=0;

		for(int i=0;i<arr.length;++i){
			sum+=arr[i];
			if(map.containsKey(sum)){
				maxLength=i-map.get(sum)>maxLength?i-map.get(sum):maxLength;
			}
			else{
				map.put(sum,i);
			}
		}


		return maxLength;

	}

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		int[] arr = new int[scn.nextInt()];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = scn.nextInt();
		}
		System.out.println(solution(arr));
	}

}