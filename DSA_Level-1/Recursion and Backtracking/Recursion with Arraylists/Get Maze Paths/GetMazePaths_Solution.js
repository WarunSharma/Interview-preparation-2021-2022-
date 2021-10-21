
function mazePaths(sr,sc,dr,dc){

    if(sr==dr-1 && sc==dc-1){
        let res=[];
        res.push("");
        return res;
    }

    let pathH=[];
    let pathV=[];

    let paths=[];

    if(sr<dr-1){
        pathH=mazePaths(sr+1,sc,dr,dc); //horizontal movement
    }

    if(sc<dc-1){
        pathV=mazePaths(sr,sc+1,dr,dc); //Vertical movement
    }

    for(let path of pathH){
        paths.push("h"+path);
    }

    for(let path of pathV){
        paths.push("v"+path);
    }

    return paths;
}

console.log(mazePaths(0,0,3,3));