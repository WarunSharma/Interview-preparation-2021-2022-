
/*
*
* @param nums Given array
* @param k no. of rotations
* @returns nums rotated array 
*
*/

let rightRotation = function (nums, k) {

    let l = nums.length;
    //If k>l, mod requires for unnecessary rotations
    k = k % l; //0<=k<ls

    let temp;

    if (k == 0) {
        return nums;
    }
    else {
        //Reverse first length-k-1 elements
        for (let i = 0, j = l - k - 1; i < j; --j, ++i) {
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        //Reverse other half
        for (let i = l - k, j = l - 1; i < j; --j, ++i) {
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        //Reverse whole array
        for (let i = 0, j = l - 1; i < j; --j, ++i) {
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        return nums;
    }
}

//Testcases
console.log('Testcase1')
console.log(rightRotation([1, 2, 3, 4, 5], 1))

console.log('Testcase2')
console.log(rightRotation([1, 2, 3, 4, 5], 4))