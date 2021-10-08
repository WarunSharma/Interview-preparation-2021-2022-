
function search(nums,x){
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < nums.length; ++j) {
          if(nums[i][j]==x){
              console.log(i);
              console.log(j);
              return;
          }
        }
      }
      
      console.log("Not Found");
}

search([[11,12,13,14],[21,22,23,24],[31,32,33,34],[41,42,43,44]],51);