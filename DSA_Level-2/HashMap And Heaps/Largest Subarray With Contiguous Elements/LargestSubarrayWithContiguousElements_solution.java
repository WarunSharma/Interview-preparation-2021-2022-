import java.util.*;

class Main {

	public static int solution(int[] arr) {
		int maxLength=0;

		for(int i=0;i<arr.length-1;++i){
			Set<Integer> set=new HashSet<>();
			set.add(arr[i]);
			int max=arr[i];
			int min=arr[i];
			for(int j=i+1;j<arr.length;++j){
				if(set.contains(arr[j])==true){
					break;
				}
				set.add(arr[j]);
				max=max<arr[j]?arr[j]:max;
				min=min>arr[j]?arr[j]:min;
				if(max-min==j-i && maxLength<j-i+1){
					maxLength=j-i+1;
				}
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