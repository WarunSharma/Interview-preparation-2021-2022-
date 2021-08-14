
function wordWrap(wordLength, maxLength){
    let n=wordLength.length;
    let extraSpace=new Array(n);
    let i=0;
    while(i<n){
        extraSpace[i]=new Array(n);
        ++i
    }

    for(let i=1;i<n;++i){
        extraSpace[i][i]=maxLength-wordLength[i];
        for(let j=i+1;j<n;++j){
            extraSpace[i][j]=extraSpace[i][j-1]-wordLength[j]-1;
        }
    }

    let minCost=new Array;
    minCost[0] = 0; 
  for (let i = 1; i < n; i++) 
  { 
    minCost[i] = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j <= i; j++) 
    { 
        let cost; // stores cost of storing words[i,j] in single line
        
        //if extraSpace required is negative, then we can't place
        //words[i,j] in a single line, else if we placed our last
        //word, then we don't consider extraSpace, else calculate
        //cost as per given cost function.
        if(extraSpace[j][i]<0)cost = Number.MAX_SAFE_INTEGER;
        else if(i==n && extraSpace[j][i]>=0)cost = 0;
        else cost = extraSpace[j][i]*extraSpace[j][i];
        
      if (minCost[j-1] != Number.MAX_SAFE_INTEGER && cost != Number.MAX_SAFE_INTEGER
      && (minCost[j-1] + cost < minCost[i])) 
        minCost[i] = minCost[j-1] + cost;
    }
  }

    // for(let i=1;i<n;++i){
    //     console.log(space[i]);
    // }

    console.log(minCost[n-1]);
}

wordWrap([0,3,2,2,5],6);