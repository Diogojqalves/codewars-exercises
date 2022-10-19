function sum (numbers) {
    if(numbers.length < 1) {
      return 0
    } else {
      let total = 0;
      for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total
      }
  };

sum([])
sum([1, 5.2, 4, 0, -1])


function sumTwo(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }