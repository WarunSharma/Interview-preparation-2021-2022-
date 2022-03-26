import java.util.*;

class Main {
	
	public static void solution(int[] arr, int k){
		HashMap<Integer,Integer> map=new HashMap<>();
		for(int a : arr){
			map.put(a%k,map.getOrDefault(a%k,0)+1);
		}

		int mid=0;
		if(map.size()%2==0){
			mid=map.size()/2;
		}
		else{
			mid=map.size()+1/2;
		}

		int value;
		for(int key : map.keySet()){
			if(key<mid){
				int keyValue=map.get(key);			
				if(key==0){
					if(keyValue%2!=0){
						System.out.println("false");
						return;
					}
				}
				else if(keyValue!=map.getOrDefault(k-key,0)){
					System.out.println("false");
					return;
					//value+=keyValue*map.get(k-key);
				}
			}
		}

		System.out.println("true");

	}

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		int[] arr = new int[n];
		for(int i = 0 ; i < n; i++){
			arr[i] = scn.nextInt();
		}
		int k = scn.nextInt();
		solution(arr,k);
	}

}