
function reverse(oneD,left,right){
    while(left<right){
        let temp=oneD[left];
        oneD[left]=oneD[right];
        oneD[right]=temp;
        ++left;
        --right;
    }
}

function rotate(oneD,r){
    r=r%oneD.length;
    if(r<0){
        r=r+oneD.length;
    }

    reverse(oneD,0,oneD.length-r-1);

    reverse(oneD,oneD.length-r,oneD.length-1);

    reverse(oneD,0,oneD.length-1);


    return oneD;
}

//console.log(rotate([1,2,3,4,5],3))

function findShell(nums,s){
    let minr=s-1;
    let maxr=nums.length-s;
    let minc=s-1;
    let maxc=nums[0].length-s;
    let size=2*(maxr-minr)+2*(maxc-minc);
    let oneD=new Array(size);
    let k=0;
    //left wall
    for(let i=minr,j=minc;i<=maxr;++i){
        oneD[k]=nums[i][j];
        k++;
    }

    //down wall
    for(let i=maxr,j=minc+1;j<=maxc;++j){
        oneD[k]=nums[i][j];
        k++;
    }

    //right wall
    for(let i=maxr-1,j=maxc;i>=minr;--i){
        oneD[k]=nums[i][j];
        ++k;
    }

    //top wall
    for(let i=minr,j=maxc-1;j>=minc+1;--j){
        oneD[k]=nums[i][j];
        ++k;
    }

    return oneD;

}

//findShell([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],1);

function fillShell(nums,s,oneD){
    let k=0;
    let minr=s-1;
    let maxr=nums.length-s;
    let minc=s-1;
    let maxc=nums[0].length-s;

    //left wall
    for(let i=minr,j=minc;i<=maxr;++i){
        nums[i][j]=oneD[k];
        k++;
    }

    //down wall
    for(let i=maxr,j=minc+1;j<=maxc;++j){
        nums[i][j]=oneD[k];
        k++;
    }

    //right wall
    for(let i=maxr-1,j=maxc;i>=minr;--i){
        nums[i][j]=oneD[k];
        k++;
    }

    //top wall
    for(let i=minr,j=maxc-1;j>=minc+1;--j){
        nums[i][j]=oneD[k];
        k++;
    }

}

function rotateShell(nums,s,r){
    let oneD=findShell(nums,s);
    console.log("oneD",oneD)
    rotate(oneD,r);
    console.log("Rotated oneD",oneD)
    fillShell(nums,s,oneD);
    console.log(nums);

}

rotateShell([[11,12,13,14,15,16,17],[21,22,23,24,25,26,27],[31,32,33,34,35,36,37],[41,42,43,44,45,46,47],[51,52,53,54,55,56,57]],2,3)
