
function isQueenSafe(chess,row,col){
    for(let i=row-1,j=col-1;i>=0 && j>=0;--i,--j){
        if(chess[i][j]==1){
            return false;
        }
    }

    for(let i=row-1;i>=0;--i){
        if(chess[i][col]==1){
            return false;
        }
    }

    for(let i=row-1,j=col+1;i>=0 && j<chess.length;--i,++j){
        if(chess[i][j]==1){
            return false;
        }
    }

    return true;
}

function NQueens(chess,ssf,row){

    if(row==chess.length){
        console.log(ssf);
        return;
    }

    for(let i=0;i<chess.length;++i){
        if(isQueenSafe(chess,row,i)){
            chess[row][i]=1;
            NQueens(chess,ssf+row+"-"+i+".",row+1);
            chess[row][i]=0;
        }
    }
}

NQueens([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"",0);