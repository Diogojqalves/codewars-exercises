function sumTwoSmallestNumbers(numbers) {  
    //Code here
    const sorted = numbers.sort(function(a, b){return a - b});
    const result = sorted[0] + sorted[1]
    return result
  }