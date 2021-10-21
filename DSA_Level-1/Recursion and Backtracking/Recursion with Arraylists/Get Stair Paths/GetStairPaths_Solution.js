
function getPaths(n){

    if(n==0){
        let res=[];
        res.push("");
        return res;
    }

    if(n<0){
        let res=[];
        return res;
    }

    let path1=getPaths(n-1);
    let path2=getPaths(n-2);
    let path3=getPaths(n-3);

    let paths=[];

    for(let s of path1){
        paths.push("1"+s);
    }

    for(let s of path2){
        paths.push("2"+s);
    }

    for(let s of path3){
        paths.push("3"+s);
    }

    return paths
}

console.log(getPaths(3));