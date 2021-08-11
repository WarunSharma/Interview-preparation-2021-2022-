
/*
*
* Time COmplexity: O(n2)
* Space Complexity: O(n2)
*
* @param str Given string
* @returns palindromic string
*
*/

//Needs refactoring
function longestPalindromicSubstring(str){
    let dp=new Array(1001);
    let resString='';
    let res=Number.MIN_SAFE_INTEGER;

    for(let i=0;i<dp.length;++i){
        dp[i]=new Array(1001);
    }

    for(let i=0;i<dp.length;++i){
        for(let j=0;j<dp[i].length;++j){
            dp[i][j]=false;
        }
    }

    for(let i=0;i<str.length;++i){
        for(let j=0;j+i<str.length;++j){
            if(i==0){
                dp[j][j]=true;
                res=Math.max(res,1);
                resString=dp[j][j];
            }
            else if(i==1){
                if(str[j]==str[j+i]){
                    dp[j][j+i]=true;
                    res=Math.max(res,2);
                    resString=str.substring(j,j+i+1);
                }
            }
            else{
                if(str[j]==str[j+i]){
                    dp[j][j+i]=dp[j+1][j+i-1];
                    if(dp[j][j+i]){
                        if(res<i+1){
                            resString=str.substring(j,j+i+1);
                        }
                        res=Math.max(res,i+1);
                    }
                }
                else{
                    dp[j][j+i]=false;
                }
            }
        }
    }

    //console.log(res);
    return resString;
}

//Testcases
console.log('Testcase 1');
console.log(longestPalindromicSubstring("babad"));

console.log('Testcase 2');
console.log(longestPalindromicSubstring("geeksforgeeks"));

console.log('Testcase 3');
console.log(longestPalindromicSubstring("forgeeksskeegfor"));

console.log('Testcase 4');
console.log(longestPalindromicSubstring("abba"));