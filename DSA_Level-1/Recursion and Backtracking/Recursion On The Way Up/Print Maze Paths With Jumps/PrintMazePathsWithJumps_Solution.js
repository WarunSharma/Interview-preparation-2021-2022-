
function printMazePath(sr,sc,dr,dc,psf){

    if(sr==dr && sc==dc){
        console.log(psf);
        return;
    }

    if(sr>dr || sc>dc){
        return;
    }

    for(let i=1;i<=dc-sc;++i){
        printMazePath(sr,sc+i,dr,dc,psf+"h"+i);
    }

    for(let i=1;i<=dr-sr;++i){
        printMazePath(sr+i,sc,dr,dc,psf+"v"+i);
    }

    for(let i=1;i<=dr-sr && i<=dc-sc;++i){
        printMazePath(sr+i,sc+i,dr,dc,psf+"d"+i);
    }

    return;

}

printMazePath(1,1,3,3,"");