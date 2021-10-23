
function printMazePaths(sr, sc, dr, dc, psf){

    if(sr==dr && sc==dc){
        console.log(psf);
        return;
    }

    if(sr>dr || sc>dc){
        return;
    }

    printMazePaths(sr, sc + 1, dr, dc, psf + "h");
    printMazePaths(sr + 1, sc, dr, dc, psf + "v");
}

printMazePaths(1,1,2,2,"");