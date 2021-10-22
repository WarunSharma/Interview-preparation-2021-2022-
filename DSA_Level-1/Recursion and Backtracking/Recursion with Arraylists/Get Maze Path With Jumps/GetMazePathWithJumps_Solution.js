
function getMaze(sr,sc,dr,dc){

    if(sr==dr && sc==dc){
        let res=[];
        res.push("");
        return res;
    }

    if(sr>dr || sc>dc){
        let res=[];
        return res;
    }

    let pathH=[];
    let pathV=[];
    let pathD=[];

    let paths=[];

    for(let i=1;i<=dc-sc;++i){
        pathH=getMaze(sr,sc+i,dr,dc);
        for(let path of pathH){
            paths.push("h"+i+path);
        }
    }

    for(let i=1;i<=dr-sr;++i){
        pathV=getMaze(sr+i,sc,dr,dc);
        for(let path of pathV){
            paths.push("v"+i+path);
        }
    }

    for(let i=1;i<=dr-sr && i<=dc-sc;++i){
        pathD=getMaze(sr+i,sc+i,dr,dc);
        for(let path of pathD){
            paths.push("d"+i+path);
        }
    }

    return paths;

}

console.log(getMaze(1,1,2,2));