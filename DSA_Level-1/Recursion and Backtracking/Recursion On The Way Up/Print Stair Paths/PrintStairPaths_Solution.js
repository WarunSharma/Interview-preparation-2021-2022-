
function printStairs(n,path){

    if(n==0){
        console.log(path);
        return;
    }

    if(n<0){
        return;
    }

    printStairs(n-1,path+"1");
    printStairs(n-2,path+"2");
    printStairs(n-3,path+"3");
}

printStairs(3,"");