
function flippedBits(a,b){
     
    let flipped_bits=a^b;
    let count=0;

    while(flipped_bits>0){

        let rsb=flipped_bits&-flipped_bits;
        flipped_bits=rsb^flipped_bits;
        ++count;

    }

    console.log(count);

}

flippedBits(57,76);