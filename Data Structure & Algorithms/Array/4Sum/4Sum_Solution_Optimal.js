
//Time Complexity: O(n2logn) , Space Complexity: O(n) O(n)

/*
*
* @nums Given array
* @param target Target element
* @param res Resultant array 
*
*/

let fourSum = function (nums, target) {

    //If given array length is less
    if (nums.length < 4) {
        return [];
    }

    //Initialize resultant array
    let result = [];

    //Defining Map to store all pair sums.
    let hashMap = new Map();

    nums.sort((a, b) => a - b);
    //Storing sum as index and pair of indexes as values
    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            let sum = nums[i] + nums[j];
            let temp = [];
            if (hashMap.has(sum)) {
                temp = hashMap.get(sum);
                temp.push([i, j])
            }
            else {
                temp.push([i, j]);
            }

            hashMap.set(sum, temp);
        }
    }

    //Defining a set for excluding duplicate quadruplets
    let set = new Set();
    for (let i = 0; i < nums.length - 1; ++i) {
        //Skipping duplicate elements
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length; ++j) {
            //Skipping duplicate elements
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }

            //Get leftover sum
            let leftSum = target - (nums[i] + nums[j]);

            //Get arr pairs with leftover sum
            let arr = hashMap.get(leftSum);

            for (let k = 0; k < arr.length; ++k) {
                if (j < arr[k][0] && j < arr[k][1]) {
                    let str = '' + nums[i] + nums[j] + nums[arr[k][0]] + nums[arr[k][1]];
                    if (set.has(str)) {
                        continue;
                    }
                    result.push([nums[i], nums[j], nums[arr[k][0]], nums[arr[k][1]]])
                    set.add(str)
                }
            }
        }
    }

    return result;
}

//Testcases
console.log('Testcase1')
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

console.log('Testcase2')
console.log(fourSum([2, 2, 2, 2, 2], 8));

console.log('Testcase3')
console.log(fourSum([-1, 0, 1, 0, -1, 1], 0));