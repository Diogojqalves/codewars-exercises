function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var total = 0;
    for(var i = 1; classPoints.length > i; i++) {
      var total = classPoints[i] + total;
    }
    
    var average = total / (classPoints.length - 1)
    if(yourPoints > average) {
      return true;
    } else {
      return false;
    }
  }
  