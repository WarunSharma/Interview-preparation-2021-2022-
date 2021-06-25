
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

let sellAndBuyStocks = function(stocks){
    let min=stocks[0];
    let profit=0;
    for(let i=1;i<stocks.length;++i){
        if(stocks[i]<min){
            min=stocks[i];
        }
        else{
            profit=Math.max(profit,stocks[i]-min);
        }
    }

    return profit;
}

console.log('Testcase1');
console.log(sellAndBuyStocks([7,1,5,3,6,4]));

console.log('Testcase2');
console.log(sellAndBuyStocks([7,6,4,3,1]));