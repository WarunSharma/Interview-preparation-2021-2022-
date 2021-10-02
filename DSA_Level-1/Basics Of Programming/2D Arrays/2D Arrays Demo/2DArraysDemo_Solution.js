
function TwoDArray(n,m){
    let arr=new Array(n);

    for(let i=0;i<arr.length;++i){
        arr[i]=new Array(m);
    }

    for(let i=0;i<arr.length;++i){
        for(let j=0;j<arr[i].length;++j){
            arr[i][j]=i+j;
        }
    }

    for(let i=0;i<arr.length;++i){
        for(let j=0;j<arr[i].length;++j){
            process.stdout.write(arr[i][j]+"\t");
        }
        console.log();
    }

}

TwoDArray(3,4);