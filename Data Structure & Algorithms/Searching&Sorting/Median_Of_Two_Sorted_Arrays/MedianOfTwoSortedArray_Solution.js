
/*
*
* @param nums1 First sorted array
* @param nums2 Second sorted array
* @returns median of two sorted array
*
*/

/*
* Step 1: nums1<nums2 if not call findMedian with reversing the arrays
* Define Cut1, Cut2
* Define l1,l2,r1 r2
* check if l1<=r2 & l2<=r1(remember differnt solution as per n+m as even or odd)
*/

function findMedian(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    //Note: First array should be of lesser or equal size. 
    if (n > m) {
        return this.findMedian(nums2, nums1);
    }

    let low = 0, high = n;

    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = Math.floor((n + m + 1) / 2) - cut1;

        let l1 = cut1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[cut1 - 1]; //Left element from first array at index cut1-1
        let l2 = cut2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[cut2 - 1]; //Left element from second array at index cut2-1
        let r1 = cut1 == n ? Number.MAX_SAFE_INTEGER : nums1[cut1]; //Right element from first array at index cut1
        let r2 = cut2 == m ? Number.MAX_SAFE_INTEGER : nums2[cut2]; //Right element from second array at index cut2

        if (l1 <= r2 && l2 <= r1) {
            if ((n + m) % 2 == 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
            }
            else {
                return Math.max(l1, l2);
            }
        }
        else if (l1 > r2) {
            high = cut1 - 1;
        }
        else {
            low = cut1 + 1;
        }
    }
}

//Testcases
console.log('Testcase1');
console.log(findMedian([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]));

console.log('Testcase2');
console.log(findMedian([2, 3, 5, 8], [10, 12, 14, 16, 18, 20]));
