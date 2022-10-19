function countBy(x, n) {
    let z = [];
    for(let i = 1; n >= i; i++) {
      z.push(x * i)
    }
    console.log(z)
    //return z;
  }

countBy(1,10)
countBy(2,5)