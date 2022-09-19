function findSum(n) {
    var sum = 0;
    for (var i = 0; n >= i; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
        sum += i
      };
    }
    return sum
  }