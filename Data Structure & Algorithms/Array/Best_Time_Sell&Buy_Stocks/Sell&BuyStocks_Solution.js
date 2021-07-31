
/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
* @param stocks Given stocks prizes in an array
* @returns maximum profit
*/

let sellAndBuyStocks = function (stocks) {
    //Initialize min with first stock prize
    let min = stocks[0];

    //Initialize profit with 0
    let profit = 0;
    for (let i = 1; i < stocks.length; ++i) {
        if (stocks[i] < min) {
            //Reinitialize min if lesser stock value is found
            min = stocks[i];
        }
        else {
            //Recalculate profit
            profit = Math.max(profit, stocks[i] - min);
        }
    }

    return profit;
}

//Testcases
console.log('Testcase1');
console.log(sellAndBuyStocks([7, 1, 5, 3, 6, 4]));

console.log('Testcase2');
console.log(sellAndBuyStocks([7, 6, 4, 3, 1]));