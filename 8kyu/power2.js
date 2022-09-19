function powersOfTwo(n){
    var nums = [];
    for(var i = 0; n >= i; i++ ) {  
      var x = Math.pow(2, i)
      nums.push(x)
    }
    
    return nums;
  }