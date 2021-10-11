
function matrixMultiplication(nums1,nums2){
    let res=new Array(nums1.length);

    for(let i=0;i<nums1[0].length;++i){
        res[i]=new Array(nums2[0].length).fill(0);
    }
    for(let i=0;i<nums1.length;++i){
        for(let j=0;j<nums2[0].length;++j){
            let c=0;
            for(let k=0;k<nums2.length;++k){
                c+=nums1[i][k]*nums2[k][j];
            }
            res[i][j]=c;
            console.log(c);
        }
    }
    return res;
}

console.log(matrixMultiplication([[1,2],[1,2]],[[1,2],[1,2]]));