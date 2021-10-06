
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
    let oneD=[];

    for(let j=s-1;j<nums[s-1].length;++j){
        oneD.push(nums[s-1][j]);
    }

    console.log(oneD);

}

findShell([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],2);

function rotateShell(nums,s,r){
    let oneD=findShell(nums,s);
    rotate(oneD,r);
    fillShell(nums,s,oneD);


}