
function findMedian(nums1,nums2){
    let n=nums1.length;
    let m=nums2.length;
    if(n>m){
        return this.findMedian(nums2,nums1);
    }

    let low=0,high=n;

    while(low<=high){
        let cut1=Math.floor((low+high)/2);
        let cut2=Math.floor((n+m+1)/2)-cut1;

        let l1=cut1==0?Number.MIN_SAFE_INTEGER:nums1[cut1-1];
        let l2=cut2==0?Number.MIN_SAFE_INTEGER:nums2[cut2-1];
        let r1=cut1==n?Number.MAX_SAFE_INTEGER:nums1[cut1];
        let r2=cut2==m?Number.MAX_SAFE_INTEGER:nums2[cut2];

        if(l1<=r2 && l2<=r1){
            if((n+m)%2==0){
                return (Math.max(l1,l2)+Math.min(r1,r2))/2;
            }
            else{
                return Math.max(l1,l2);
            }
        }
        else if(l1>r2){
            high=cut1-1;
        }
        else{
            low=cut1+1;
        }
    }
}

console.log('Testcase1');
console.log(findMedian([-5, 3, 6, 12, 15],[-12, -10, -6, -3, 4, 10]));

console.log('Testcase2');
console.log(findMedian([2, 3, 5, 8],[10, 12, 14, 16, 18, 20]));
