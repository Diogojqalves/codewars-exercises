var isSquare = function(n){
    if (n < 0) {
      return false
    } else if (Math.sqrt(n) >= 0 && Number.isInteger(Math.sqrt(n))) {
      return true
    } else {
      return false
    }
  }