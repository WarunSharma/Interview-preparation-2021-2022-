
function printEncoding(str,psf){

    if(str.length==0){
        console.log(psf);
        return;
    }
    else if(str.length==1){
        if(str[0]=='0'){
            return;
        }
        else{
            let val=96+parseInt(str[0]);
            let ch=String.fromCharCode(val);
            console.log(psf+ch);
        }
    }
    else{
        if(str[0]=='0'){
            return;
        }
        else{
            let val=96+parseInt(str[0]);
            let ch=String.fromCharCode(val);
            printEncoding(str.substring(1),psf+ch);
        }

        let val=96+parseInt(str[0]+str[1]);
        if(val>=97 && val<=122){
            let ch=String.fromCharCode(val);
            printEncoding(str.substring(2),psf+ch);
        }
        
    }
}

printEncoding("655196","");
