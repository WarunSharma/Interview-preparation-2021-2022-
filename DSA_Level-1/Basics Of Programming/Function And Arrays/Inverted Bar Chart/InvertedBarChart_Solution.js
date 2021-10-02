
function print(arr){
    let n=arr.length;
    let max = arr[0];

    for (let i = 0; i < n; ++i) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    for (let i = 1; i <= max; ++i) {
      for (let j = 0; j < arr.length; ++j)
      {
        if (arr[j] >= i ) {
          process.stdout.write("*\t");
        }
        else {
            process.stdout.write("\t");
        }
      }
      console.log();
    }
}

print([3,1,0,7,5]);