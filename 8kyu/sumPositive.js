function positiveSum(arr) {
    var pos = 0;
    for(var i = 0; arr.length > i; i++) {
      if(arr[i] > 0) {
        pos += arr[i];
      }
    }
    return pos;
  }