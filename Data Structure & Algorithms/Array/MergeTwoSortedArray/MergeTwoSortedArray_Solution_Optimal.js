
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let mergeArrays=function(nums1,nums2){
    let length1=nums1.length, length2=nums2.length;
    let gap=Math.ceil((length1+length2)/2);

    while(true){
        let i=0,j=gap;
        let element1,element2;
        let temp;
        while(j<length1+length2){
            if(i<length1 && j<length1){
                if(nums1[i]>nums1[j]){
                    temp=nums1[i];
                    nums1[i]=nums1[j];
                    nums1[j]=temp;
                }
            }
            else if(i>=length1 && j>=length1){
                if(nums2[i-length1]>nums2[j-length1])
                {
                    temp=nums2[i-length1];
                    nums2[i-length1]=nums2[j-length1];
                    nums2[j-length1]=temp;
                }
            }
            else {
                if(nums1[i]>nums2[j-length1]){
                    temp=nums1[i];
                    nums1[i]=nums2[j-length1];
                    nums2[j-length1]=temp;
                }
            }
            ++i;
            ++j;
        }
        if(gap==1){
            break;
        }
        gap=Math.ceil(gap/2);
    }
    console.log(nums1,'||',nums2);
}

console.log('Testcase1')
mergeArrays([1, 3, 5, 7],[0, 2, 6, 8, 9]);

console.log('Testcase2')
mergeArrays([1],[0]);

console.log('Testcase3')
mergeArrays([1],[0,2,3,4,90]);

console.log('Testcase4')
mergeArrays([1,5],[]);

console.log('Testcase4')
mergeArrays([],[1,7]);

