
function validWords(words,puzzles){
    
    let wordBits=[];
    let puzzleBits=[];

    for(let word of words){
        let bits=0;
        for(let i=0;i<word.length;++i){
            let val=word.charCodeAt(i)-97;
            bits=bits|(1<<val);
            //process.stdout.write(word[i]+":"+val);
        }
        wordBits.push(bits);
        //console.log(bits.toString(2));
    }

    for(let puzzle of puzzles){
        let bits=0;
        for(let i=0;i<puzzle.length;++i){
            let val=puzzle.charCodeAt(i)-97;
            bits=bits|(1<<val);
        }
        puzzleBits.push(bits);
    }

    // console.log(wordBits);
    // console.log(puzzleBits);

    for(let i=0;i<puzzles.length;++i){
        let count=0;
        for(let j=0;j<words.length;++j){
            if(words[j][0]==puzzles[i][0] && (wordBits[j]&puzzleBits[i])==wordBits[j]){
                ++count;
            }
        }
        console.log(puzzles[i]+" --> "+count);
    }

}

validWords(['aaaa','asas','able','ability','actt','actor','access'],['aboveyz','abrodyz','abslute','absoryz','actresz','gaswxyz']);