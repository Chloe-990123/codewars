function positiveSum(arr) {
    return arr.reduce((acc, curr) => curr > 0 ? acc += curr : acc = acc, 0)
  }