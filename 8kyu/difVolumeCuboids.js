function findDifference(a, b) {
    //loading...
    const c = a.reduce((num1, num2) => num1 * num2);
    console.log(c);
    const d = b.reduce((num1, num2) => num1 * num2);
    if(c > d) {
      return c - d
    } else {
      return d - c;
    }
  }

findDifference([3, 2, 5], [1, 4, 4])