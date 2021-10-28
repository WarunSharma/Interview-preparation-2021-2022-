
function floodFill(arr,row,col,asf,visited){

    if(row<0 || col<0 || row==arr.length || col==arr[0].length || arr[row][col]==1 || visited[row][col]==1)
        return;   

    if(row==arr.length-1 && col==arr[0].length-1){
        console.log(asf);
        return;
    }
    // console.log(asf);
    visited[row][col]=1;
    floodFill(arr,row-1,col,asf+'t',visited);
    floodFill(arr,row,col-1,asf+'l',visited);
    floodFill(arr,row+1,col,asf+'d',visited);
    floodFill(arr,row,col+1,asf+'r',visited);
    visited[row][col]=0;    
}

floodFill([[0,0,0],[1,0,1],[0,0,0]],0,0,"",[[0,0,0],[0,0,0],[0,0,0]]);