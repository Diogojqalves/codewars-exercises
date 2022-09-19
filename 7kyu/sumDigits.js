function sumDigits(number) {
    var total = 0;
    if(number < 0) {
      number *= -1;
    }
    while(number > 0){
      var digit = number % 10;
      var total = total + Math.floor(digit);
      number /= 10;
    }
    return total;
  }
  